"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { excerptFromMarkdown, slugify } from "../lib/md";

export default function BlogList({ posts }) {
  const [q, setQ] = useState("");

  // Search titles only
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return posts;
    return posts.filter((p) => p.title.toLowerCase().includes(s));
  }, [q, posts]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="card p-3 flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-4.23C15.91 6.01 13.4 3.5 10.45 3.5S5 6.01 5 9.5 7.51 15.5 10.45 15.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49L15.5 14zm-5.05 0C8 14 6.5 12.5 6.5 10.55S8 7.1 10.45 7.1s3.95 1.5 3.95 3.45S12.9 14 10.45 14z"/>
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search post titles…"
          className="flex-1 bg-transparent outline-none placeholder:text-[var(--muted)]"
          aria-label="Search post titles"
        />
        {q && (
          <button
            className="text-sm text-[var(--muted)] hover:text-white"
            onClick={() => setQ("")}
          >
            Clear
          </button>
        )}
      </div>

      {/* Count */}
      <div className="text-sm text-[var(--muted)]">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((p) => {
          const href = `/blog/${slugify(p.slug || p.title)}`;
          const preview = excerptFromMarkdown(p.body, 150);
          return (
            <Link
              key={p.title + p.date}
              href={href}
              className="card overflow-hidden group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 md:h-44 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="p-4">
                <div className="eyebrow mb-1">
                  {new Date(p.date).toLocaleDateString()}
                </div>
                <h3 className="font-display font-semibold">{p.title}</h3>
                <p className="text-[var(--muted)] mt-1 line-clamp-2">
                  {preview}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="card p-6 text-center text-[var(--muted)]">
          No posts found. Try a different title.
        </div>
      )}
    </div>
  );
}
