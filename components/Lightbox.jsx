"use client";

export default function Lightbox({ open, src, onClose }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-7 bg-black/80 backdrop-blur-xl"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button
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
    </div>
  );
}
