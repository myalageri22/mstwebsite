"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  grade: "",
  message: "",
  company: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as { success: boolean; message?: string; error?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setFeedback(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFeedback(data.message ?? "Thanks! We will reach out shortly.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="hidden"
        name="company"
        onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        tabIndex={-1}
        type="text"
        value={form.company}
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
          Name<span className="text-brand-lime"> *</span>
        </label>
        <input
          className="focus-ring w-full rounded-xl border border-white/15 bg-brand-ink/60 px-4 py-2.5 text-sm placeholder:text-brand-muted"
          id="name"
          name="name"
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Student or parent name"
          required
          type="text"
          value={form.name}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            Email<span className="text-brand-lime"> *</span>
          </label>
          <input
            className="focus-ring w-full rounded-xl border border-white/15 bg-brand-ink/60 px-4 py-2.5 text-sm placeholder:text-brand-muted"
            id="email"
            name="email"
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="name@example.com"
            required
            type="email"
            value={form.email}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            className="focus-ring w-full rounded-xl border border-white/15 bg-brand-ink/60 px-4 py-2.5 text-sm placeholder:text-brand-muted"
            id="phone"
            name="phone"
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            placeholder="Optional"
            type="tel"
            value={form.phone}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="grade">
          Student Grade
        </label>
        <input
          className="focus-ring w-full rounded-xl border border-white/15 bg-brand-ink/60 px-4 py-2.5 text-sm placeholder:text-brand-muted"
          id="grade"
          name="grade"
          onChange={(event) => setForm((prev) => ({ ...prev, grade: event.target.value }))}
          placeholder="e.g. 8th, 10th, 11th"
          type="text"
          value={form.grade}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
          Message<span className="text-brand-lime"> *</span>
        </label>
        <textarea
          className="focus-ring min-h-36 w-full rounded-xl border border-white/15 bg-brand-ink/60 px-4 py-2.5 text-sm placeholder:text-brand-muted"
          id="message"
          name="message"
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Tell us goals, current class level, and where support is needed."
          required
          value={form.message}
        />
        <p className="mt-2 text-xs text-brand-muted">Minimum 20 characters.</p>
      </div>

      <div className="flex items-center gap-4">
        <Button disabled={status === "loading"} type="submit" variant="primary">
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
        {status !== "idle" ? (
          <p
            className={status === "success" ? "text-sm font-medium text-brand-lime" : "text-sm font-medium text-rose-300"}
            role="status"
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
