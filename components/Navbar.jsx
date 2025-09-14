export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-black/50 border-b border-white/10">
      {/* Mobile: vertical stack; Desktop: horizontal */}
      <div className="container py-3 sm:h-[96px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
          {/* Logo: preserve full wordmark, scale per breakpoint */}
          <img
            src="/logo.png"
            alt="Wonderful Cannabis logo"
            className="shrink-0 h-10 w-auto object-contain sm:h-14 md:h-16"
            draggable={false}
          />
          <div className="leading-tight text-center sm:text-left">
            <div className="font-display font-extrabold tracking-wide text-2xl sm:text-3xl md:text-4xl">
              Wonderful Cannabis
            </div>
            {/* Hide subtitle on mobile to prevent overflow */}
            <div className="hidden sm:block text-sm md:text-base text-brand2/90">
              Company by Afroman
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <a className="btn btn-secondary w-full sm:w-auto py-2.5 text-sm sm:text-base" href="#products">
            Browse Menu
          </a>
          {/* Blog is now second and reworded */}
          <a className="btn btn-secondary w-full sm:w-auto py-2.5 text-sm sm:text-base" href="/blog">
            Read our blog
          </a>
          <a className="btn btn-primary w-full sm:w-auto py-2.5 text-sm sm:text-base" href="#visit">
            Contact/Location
          </a>
        </div>
      </div>
    </nav>
  );
}
