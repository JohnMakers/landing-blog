export default function Hero() {
  return (
    <header className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-stretch card overflow-hidden">
          {/* LEFT: text + CTAs */}
          <div className="p-7 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-2">Local. Legal. Friendly.</h1>
            <p className="lead mb-4 max-w-prose">
              Wonderful Cannabis Company by Afroman is your community hub for premium products, exceptional service, and a welcoming, relaxed atmosphere.
            </p>

            {/* Centered buttons */}
            <div className="flex gap-2 flex-wrap justify-center mb-4">
              <a
                className="btn btn-primary"
                href="#visit"
              >
                Visit us Today
              </a>
              <a className="btn btn-secondary" href="#products">
                View Products
              </a>
            </div>

            {/* Centered quick info */}
            <div className="grid md:grid-cols-3 gap-3 w-full max-w-3xl">
              <div className="card p-3 text-center">
                <div className="text-sm text-[var(--muted)]">Phone</div>
                <div><a href="tel:+19018402022">(901) 840-2022</a></div>
              </div>
              <div className="card p-3 text-center">
                <div className="text-sm text-[var(--muted)]">Address</div>
                <div>11124 TN-3 #B, Atoka, Tennessee.
</div>
              </div>
              <div className="card p-3 text-center">
                <div className="text-sm text-[var(--muted)]">Hours</div>
                <div >Mon–Sun <br />10AM : 8PM</div>
              </div>
            </div>
          </div>

          {/* RIGHT: background image (no overflow) */}
          <div
            aria-hidden="true"
            className="min-h-[220px] md:min-h-[320px] h-full bg-[url('/logo-2.jpg')] bg-center bg-cover"
          />
        </div>
      </div>
    </header>
  );
}
