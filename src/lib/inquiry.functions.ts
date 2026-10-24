import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const inquirySchema = z.object({
  fullName: z.string().trim().min(1, "Please share your name").max(120),
  email: z.string().trim().email("Please share a valid email address").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  visitDate: z.string().trim().max(40).optional().default(""),
  travellers: z.coerce.number().int().min(1).max(50).optional(),
  country: z.string().trim().max(80).optional().default(""),
  experiences: z.array(z.string().trim().max(120)).max(12).optional().default([]),
  duration: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export type InquiryInput = z.input<typeof inquirySchema>;

/**
 * Stores a safari inquiry. Runs server-side with the publishable key;
 * the database only accepts inserts from anonymous visitors.
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false, autoRefreshToken: false, storage: undefined },
      global: {
        // Opaque sb_ keys are not JWTs; send apikey only, no bearer header.
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
            h.delete("Authorization");
          }
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const { error } = await supabase.from("inquiries").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      visit_date: data.visitDate || null,
      travellers: data.travellers ?? null,
      country: data.country || null,
      experiences: data.experiences,
      duration: data.duration || null,
      message: data.message || null,
    });

    if (error) {
      console.error("Inquiry insert failed:", error.message);
      return { ok: false as const, error: "We could not send your inquiry right now. Please try again in a moment." };
    }
    return { ok: true as const };
  });
