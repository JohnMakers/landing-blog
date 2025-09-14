"use client";

import { useEffect, useState } from "react";

export default function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const ok = localStorage.getItem("age_ok");
    if (!ok) setOpen(true);
  }, []);

  if (!open) return null;

  const accept = () => {
    localStorage.setItem("age_ok", "1");
    setOpen(false);
  };

  const leave = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur">
      <div className="card max-w-md w-full p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Are you 21+?</h2>
        <p className="text-[var(--muted)]">
          By entering this site you confirm you are of legal age in your area.
        </p>
        <div className="flex gap-2 justify-center mt-4">
          <button className="btn btn-primary" onClick={accept}>Yes, enter</button>
          <button className="btn btn-secondary" onClick={leave}>No</button>
        </div>
      </div>
    </div>
  );
}
