"use client";

import { useState } from "react";
import Lightbox from "./Lightbox"; // Import the existing Lightbox component

const IMGS = ["/store-1.jpg", "/store-2.jpg", "/store-3.jpg"];

export default function About() {
  // Middle image starts featured
  const [active, setActive] = useState(1);

  // Add state to control the lightbox, just like in Products.jsx
  const [lbOpen, setLbOpen] = useState(false);
  const [lbSrc, setLbSrc] = useState("");

  const handleImageClick = (i, src) => {
    if (active === i) {
      // If it's ALREADY active, open the lightbox
      setLbSrc(src);
      setLbOpen(true);
    } else {
      // Otherwise, just swap the active image in the accordion
      setActive(i);
    }
  };

  return (
    <>
      {/* Text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">About the Shop</h2>
        <p className="text-[var(--muted)]">
          Welcome to Wonderful Cannabis Company by Afroman, Tipton County’s premier destination for high-end cannabis experiences. We curate a refined selection of products designed to elevate every session, from premium THCA flower and THCA vapes to Delta-9 gummies, edibles, and drinks. For seasoned connoisseurs, our THCA concentrates deliver depth and purity, while our CBD offerings provide balance and wellness. Explore a comprehensive lineup of smoking essentials—pipes, rolling papers, and a full range of accessories—chosen for durability, design, and performance. We partner with trusted growers and brands to ensure quality, consistency, and transparency, and our knowledgeable team is always ready to guide you through your choices, answer questions, and help you discover new favorites.
        </p>
      </div>

      {/* Images — NO card/frame, just the photos */}
      <div className="mt-5 flex gap-3 items-stretch">
        {IMGS.map((src, i) => {
          const isActive = i === active;

          // Active image larger; others smaller. No background/border.
          const base = "transition-all duration-300 ease-out select-none";
          const activeSize = "flex-[2] h-72 md:h-96";
          const smallSize = "flex-[1] h-44 md:h-64 opacity-95 hover:opacity-100";
          // Add a dynamic cursor: zoom-in for active, pointer for inactive
          const cursor = isActive ? "cursor-zoom-in" : "cursor-pointer";

          return (
            <div
              key={i}
              className={`${base} ${isActive ? activeSize : smallSize} ${cursor}`}
              onClick={() => handleImageClick(i, src)} // Use new handler
              aria-label={`Show photo ${i + 1} larger`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && handleImageClick(i, src)
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Store photo ${i + 1}`}
                className={`w-full h-full rounded-xl ${
                  isActive ? "object-contain" : "object-cover"
                }`}
                loading="lazy"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Add the Lightbox component, which is hidden by default */}
      <Lightbox open={lbOpen} src={lbSrc} onClose={() => setLbOpen(false)} />
    </>
  );
}
