"use client";

export default function BackArrow({ fallback = "/" }) {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.assign(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={goBack}
      aria-label="Go back"
      className="fixed top-3 left-3 z-40 w-10 h-10 grid place-items-center rounded-full
                 bg-black/60 border border-white/20 backdrop-blur hover:bg-black/70"
    >
      <span aria-hidden>←</span>
    </button>
  );
}
