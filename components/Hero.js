export default function Hero() {
  return (
    <section id="top" className="max-w-content mx-auto px-6 sm:px-8 pt-16 pb-20 text-center">
      <p className="fade-up font-display italic text-gold text-lg mb-3">Est. in Erode</p>
      <h1 className="fade-up font-display text-5xl sm:text-6xl lg:text-7xl text-coffee leading-[1.05]">
        Filter coffee,
        <br />
        made the slow way.
      </h1>
      <p className="fade-up text-cocoa text-base sm:text-lg mt-6 max-w-md mx-auto leading-relaxed">
        A neighbourhood café serving hand-brewed filter coffee, tiffin, and light meals —
        every cup made to order, no shortcuts.
      </p>
      <div className="fade-up flex items-center justify-center gap-3 mt-8 flex-wrap">
        <a
          href="#menu"
          className="bg-rust text-cream text-sm font-medium rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
        >
          View Menu
        </a>
        <a
          href="#visit"
          className="border border-coffee/20 text-coffee text-sm font-medium rounded-full px-6 py-3 hover:border-coffee/50 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
