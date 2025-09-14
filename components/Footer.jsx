export default function Footer() {
  return (
    <footer className="mt-8 py-10 border-t border-white/10 bg-black/20">
      <div className="container flex flex-wrap gap-4 items-center justify-between">
        <div>
          <strong>Wonderful Cannabis</strong>
          <div className="text-[var(--muted)]">21+ only</div>
        </div>
        <div className="flex gap-2">
          <a className="px-3 py-2 rounded-full bg-white/10 border border-white/10" href="#">Instagram</a>
          <a className="px-3 py-2 rounded-full bg-white/10 border border-white/10" href="/blog">Blog</a>
          <a className="px-3 py-2 rounded-full bg-white/10 border border-white/10" href="mailto:hello@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
