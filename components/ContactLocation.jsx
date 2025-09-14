"use client";

export default function ContactLocation() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you.");
    e.currentTarget.reset();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-3">Visit & Contact</h2>
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-5 items-start">
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <label className="space-y-1">
              <span className="text-sm text-[var(--muted)]">Name</span>
              <input
                required
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-[var(--muted)]">Email or Phone</span>
              <input
                required
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20"
              />
            </label>
            <label className="space-y-1">
              <span className="text-sm text-[var(--muted)]">Message</span>
              <textarea
                placeholder="How can we help?"
                className="min-h-[120px] w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20"
              />
            </label>
            <div className="flex gap-2">
              <button className="btn btn-primary" type="submit">Send</button>
              <a className="btn btn-secondary" href="tel:+19018402022">Call Now</a>
            </div>
          </form>
        </div>

        <div>
          <div className="card p-5 mb-3">
            <h3 className="text-lg font-semibold mb-1">Our Location</h3>
            <p className="mb-2">11124 TN-3 #B, Atoka, Tennessee, 38004.</p>
            <a
              className="btn btn-primary"
              href="https://maps.app.goo.gl/jMcQXt7iJyes6rUu6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>

          <iframe
            title="Map"
            className="w-full h-80 rounded-xl border-0"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.3227765959555!2d-89.78462859999999!3d35.4468027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f6e9a9ead763d%3A0x7b240b0da3097b1c!2s11124%20TN-3%20Ste%20B%2C%20Atoka%2C%20TN%2038004!5e0!3m2!1sen!2sus!4v1757866268971!5m2!1sen!2sus"
          />
        </div>
      </div>
    </>
  );
}
