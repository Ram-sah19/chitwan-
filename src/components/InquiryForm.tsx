import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Check, Loader2, Send } from "lucide-react";
import { submitInquiry, type InquiryInput } from "@/lib/inquiry.functions";
import { experiences } from "@/data/experiences";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const durationOptions = [
  "Not sure yet — advise me",
  "A few hours",
  "Half day",
  "Full day",
  "Multiple days",
];

const inputClass =
  "w-full border border-ivory/20 bg-ivory/5 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm({ defaultExperience }: { defaultExperience?: string }) {
  const submitFn = useServerFn(submitInquiry);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>(
    defaultExperience ? [defaultExperience] : [],
  );

  const toggleExperience = (title: string) =>
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: InquiryInput = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      visitDate: String(fd.get("visitDate") ?? ""),
      travellers: fd.get("travellers") ? Number(fd.get("travellers")) : undefined,
      country: String(fd.get("country") ?? ""),
      experiences: selected,
      duration: String(fd.get("duration") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    // Client-side validation of the required essentials.
    if (!data.fullName.trim()) return setError("Please share your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return setError("Please share a valid email address.");

    setStatus("loading");
    try {
      const result = await submitFn({ data });
      if (result.ok) {
        setStatus("success");
        // Prefill the WhatsApp button with this inquiry's essentials.
        const parts = [
          selected.length ? `Experiences: ${selected.join(", ")}` : undefined,
          data.visitDate ? `Preferred visit date: ${data.visitDate}` : undefined,
          data.travellers ? `Travellers: ${data.travellers}` : undefined,
        ].filter(Boolean);
        window.dispatchEvent(
          new CustomEvent("whatsapp-prefill", {
            detail: parts.length
              ? `${site.whatsappDefaultMessage} ${parts.join(" · ")}`
              : undefined,
          }),
        );
      } else {
        setStatus("error");
        setError(result.error);
      }
    } catch (err) {
      const message = err instanceof Error && /smaller|bigger|invalid|expected/i.test(err.message)
        ? "Please check the highlighted fields and try again."
        : "We could not send your inquiry right now. Please try again in a moment.";
      setStatus("error");
      setError(message);
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/40 bg-gold/10 p-10 text-center">
        <Check className="mx-auto h-10 w-10 text-gold" aria-hidden />
        <h3 className="mt-5 font-display text-2xl text-ivory">Thank you — your inquiry is on its way.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ivory/70">
          We have received your request and will reply with a personal safari plan.
          There is nothing to pay or confirm until we have spoken with you.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-gold underline-offset-4 hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Full name *</span>
          <input name="fullName" required maxLength={120} className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Email address *</span>
          <input name="email" type="email" required maxLength={255} className={inputClass} placeholder="you@example.com" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">WhatsApp / phone number</span>
          <input name="phone" type="tel" maxLength={40} className={inputClass} placeholder="+977 …" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Preferred visit date</span>
          <input name="visitDate" type="date" className={cn(inputClass, "text-ivory/90")} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Number of travellers</span>
          <input name="travellers" type="number" min={1} max={50} className={inputClass} placeholder="2" />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Country of residence (optional)</span>
          <input name="country" maxLength={80} className={inputClass} placeholder="Your country" />
        </label>
      </div>

      <fieldset>
        <legend className="mb-3 block text-xs tracking-widest text-ivory/70 uppercase">
          Preferred experiences
        </legend>
        <div className="flex flex-wrap gap-2">
          {experiences.map((exp) => (
            <button
              key={exp.slug}
              type="button"
              aria-pressed={selected.includes(exp.title)}
              onClick={() => toggleExperience(exp.title)}
              className={cn(
                "border px-3 py-2 text-xs tracking-wide transition-all",
                selected.includes(exp.title)
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-ivory/20 text-ivory/70 hover:border-gold/60 hover:text-ivory",
              )}
            >
              {exp.title}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Preferred tour duration</span>
        <select name="duration" defaultValue="" className={cn(inputClass, "appearance-none")}>
          <option value="" className="text-foreground">Select a duration</option>
          {durationOptions.map((d) => (
            <option key={d} value={d} className="text-foreground">
              {d}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs tracking-widest text-ivory/70 uppercase">Additional requests</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          className={cn(inputClass, "resize-y")}
          placeholder="Tell us about your interests, pace, group or anything else that matters."
        />
      </label>

      {error && (
        <p role="alert" className="border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-sm font-semibold tracking-wider text-jungle transition-all hover:bg-gold-soft disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Request My Safari Plan
          </>
        )}
      </button>
    </form>
  );
}
