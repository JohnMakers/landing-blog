"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // Import createPortal

export default function Lightbox({ open, src, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  // We must wait until the component has "mounted" (run in the browser)
  // before we can safely use document.body for the Portal.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // This effect adds/removes 'overflow: hidden' to the body
  // to prevent scrolling the page *behind* the open modal.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = ""; // Revert to default
    };
  }, [open]);

  // Don't render anything if it's not open OR if we haven't mounted yet
  if (!open || !isMounted) {
    return null;
  }

  // Use createPortal to teleport the JSX to the end of document.body
  // This frees it from any parent z-index or stacking issues.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-7 bg-black/80 backdrop-blur-xl"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
        type="button"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/30"
        onClick={onClose}
        aria-label="Close preview"
      >
        ✕
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Expanded image"
        className="max-w-[92vw] max-h-[86vh] rounded-xl border border-white/20 shadow-soft object-contain"
        draggable={false}
      />
    </div>,
    document.body // The destination for the "teleport"
  );
}
