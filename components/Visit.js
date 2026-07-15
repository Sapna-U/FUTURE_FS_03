import Divider from './Divider';

export default function Visit() {
  return (
    <section id="visit" className="bg-coffee text-cream py-16">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Divider />
        <h2 className="font-display text-3xl text-center mb-10">Visit Us</h2>

        <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <p className="font-display italic text-gold mb-2">Address</p>
            <p className="text-sm text-cream/80 leading-relaxed">
              14 Brough Road, Erode,
              <br />
              Tamil Nadu 638152
            </p>
          </div>
          <div>
            <p className="font-display italic text-gold mb-2">Hours</p>
            <p className="text-sm text-cream/80 leading-relaxed">
              Mon – Sat: 6:30 AM – 9:00 PM
              <br />
              Sunday: 7:00 AM – 1:00 PM
            </p>
          </div>
          <div>
            <p className="font-display italic text-gold mb-2">Contact</p>
            <p className="text-sm text-cream/80 leading-relaxed">
              +91 98765 43210
              <br />
              hello@southernbrew.example
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="bg-rust text-cream text-sm font-medium rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
          >
            Get Directions ↗
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-cream/50 mt-14">
        © {new Date().getFullYear()} Southern Brew · Erode, Tamil Nadu
      </p>
    </section>
  );
}
