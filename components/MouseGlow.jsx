"use client";

import { useState, useEffect } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    // Listen for mouse/pointer movements on the whole window
    window.addEventListener("pointermove", handlePointerMove);
    // Cleanup
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const styles = {
    // This creates the radial glow at the mouse position
    background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.1), transparent 80%)`,
    // This blend mode matches the one used on your theme's background glows
    mixBlendMode: "overlay",
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30"
      style={styles}
      aria-hidden="true"
    />
  );
}