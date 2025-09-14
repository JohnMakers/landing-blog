"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCT_DATA } from "../lib/data";
import Lightbox from "./Lightbox";

const CATS = Object.keys(PRODUCT_DATA);

export default function Products() {
  const [cat, setCat] = useState(CATS[0]);
  const [index, setIndex] = useState(0); // real index 0..count-1
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");

  const containerRef = useRef(null); // frame
  const slidesRef = useRef(null);    // rail

  const imgs = PRODUCT_DATA[cat].images;
  const count = imgs.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  // Reset to first slide on category change
  useEffect(() => setIndex(0), [cat]);

  // Snap to current index (when not actively dragging)
  const snapToIndex = () => {
    if (!slidesRef.current) return;
    slidesRef.current.style.transition = "transform 300ms ease";
    slidesRef.current.style.transform = `translateX(${-100 * index}%)`;
  };
  useEffect(snapToIndex, [index]);

  // ----- DRAG / SWIPE (wrap-aware) -----
  useEffect(() => {
    const frame = containerRef.current;
    const rail = slidesRef.current;
    if (!frame || !rail) return;

    let startX = 0;
    let dx = 0;
    let dragging = false;
    let tapStart = 0;

    const width = () => frame.clientWidth || 1;

    const onDown = (e) => {
      dragging = true;
      tapStart = Date.now();
      startX = e.clientX;
      dx = 0;
      rail.style.transition = "none";
      rail.setPointerCapture?.(e.pointerId);
      frame.classList.add("cursor-grabbing");
    };

    const onMove = (e) => {
      if (!dragging) return;
      dx = e.clientX - startX;

      // Convert drag distance to percentage of slide width
      // Apply a small clamp near edges to reduce huge blank areas while dragging
      const w = width();
      const maxDriftPx = w * 0.25; // 25% rubber band at most
      const drift = Math.max(Math.min(dx, maxDriftPx), -maxDriftPx);

      const offsetPct = (drift / w) * 100;
      rail.style.transform = `translateX(calc(${-100 * index}% + ${offsetPct}%))`;
    };

    const finishGesture = () => {
      if (!dragging) return;
      dragging = false;
      frame.classList.remove("cursor-grabbing");

      const travel = Math.abs(dx);
      const w = width();
      const threshold = w * 0.18; // ~18% to change slide
      rail.style.transition = "transform 300ms ease";

      if (travel > threshold) {
        dx < 0 ? next() : prev(); // wrap around ends
      } else {
        // Not enough travel -> snap back to current index
        rail.style.transform = `translateX(${-100 * index}%)`;
      }

      // TAP: tiny movement + quick release opens lightbox
      const shortTap = travel < 8 && Date.now() - tapStart < 250;
      if (shortTap) {
        setLbSrc(imgs[index]);
        setLbOpen(true);
      }
    };

    const onUp = () => finishGesture();
    const onCancel = () => finishGesture();

    // Allow vertical page scroll; we only capture horizontal drags
    rail.style.touchAction = "pan-y";
    rail.addEventListener("pointerdown", onDown);
    rail.addEventListener("pointermove", onMove);
    rail.addEventListener("pointerup", onUp);
    rail.addEventListener("pointercancel", onCancel);
    rail.addEventListener("pointerleave", onCancel);

    return () => {
      rail.removeEventListener("pointerdown", onDown);
      rail.removeEventListener("pointermove", onMove);
      rail.removeEventListener("pointerup", onUp);
      rail.removeEventListener("pointercancel", onCancel);
      rail.removeEventListener("pointerleave", onCancel);
    };
  }, [imgs, index, count]);

  const openLightbox = (src) => {
    setLbSrc(src);
    setLbOpen(true);
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Browse Products</h2>

      {/* Pills: wrap + center */}
      <div
        className="flex flex-wrap justify-center gap-2 pb-1"
        role="tablist"
        aria-label="Product types"
      >
        {CATS.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={`px-3 py-2 rounded-full font-semibold whitespace-nowrap border
             ${cat === c ? "bg-brand text-black border-transparent" : "bg-white/10 text-white border-white/20"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        <div className="card p-4">{PRODUCT_DATA[cat].blurb}</div>

        {/* Taller carousel; drag enabled; wrap on ends */}
        <div
          ref={containerRef}
          className="relative card overflow-hidden h-[24rem] md:h-[30rem] select-none cursor-grab"
          aria-roledescription="carousel"
          aria-label="Product photos"
        >
          <div
            ref={slidesRef}
            className="flex h-full transition-transform duration-300 ease-out"
          >
            {imgs.map((src, i) => (
              <div
                key={i}
                className="min-w-full h-full flex items-center justify-center bg-[#0b201a]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${cat} ${i + 1}`}
                  className="max-h-full max-w-full object-contain cursor-zoom-in"
                  onClick={() => openLightbox(src)}  // desktop click
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Navigation overlay that doesn't block image taps */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 border border-white/30 grid place-items-center"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 border border-white/30 grid place-items-center"
            >
              ▶
            </button>
          </div>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {imgs.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full border ${index === i ? "bg-brand border-transparent" : "bg-white/40 border-white/70"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-[var(--muted)]">
          Ask in store for your desired purchase.
        </p>
      </div>

      <Lightbox open={lbOpen} src={lbSrc} onClose={() => setLbOpen(false)} />
    </>
  );
}
