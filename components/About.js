import Divider from './Divider';

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 sm:px-8 py-16">
      <Divider />
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-3xl text-coffee mb-5">Our Story</h2>
        <p className="text-cocoa leading-relaxed">
          Southern Brew started with one idea — filter coffee deserves patience. We roast in
          small batches, brew each cup fresh, and keep our tiffin menu short so everything on
          it is made well. No rush, no shortcuts, just good coffee and honest food.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-line">
          <Stat value="7+" label="years brewing" />
          <Stat value="100%" label="filter coffee" />
          <Stat value="12" label="menu favourites" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-2xl text-rust">{value}</p>
      <p className="text-xs text-cocoa mt-1">{label}</p>
    </div>
  );
}
