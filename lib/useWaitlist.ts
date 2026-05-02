"use client";

import { useState } from "react";

const WAITLIST_ENDPOINT = "https://api.tde.slategraph.com/v1/accounts/waitlist/";

export type WaitlistStatus = "idle" | "submitting" | "success" | "error";

export function useWaitlist() {
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(email: string) {
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong");
    }
  }

  return { submit, status, error };
}
