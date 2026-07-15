import Divider from './Divider';

const reviews = [
  {
    quote: 'Best filter coffee in Erode, hands down. The aroma alone is worth the visit.',
    name: 'Kavitha R.',
  },
  {
    quote: 'Their ghee roast and coffee combo is my Sunday ritual now.',
    name: 'Suresh M.',
  },
  {
    quote: 'Small place, big heart. Everything tastes homemade.',
    name: 'Anitha P.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="max-w-content mx-auto px-6 sm:px-8 py-16">
      <Divider />
      <h2 className="font-display text-3xl text-coffee text-center mb-10">What people say</h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="bg-paper border border-line rounded-lg p-6 text-center"
          >
            <p className="font-display italic text-coffee text-[15px] leading-relaxed">
              &ldquo;{r.quote}&rdquo;
            </p>
            <p className="text-xs text-cocoa mt-4">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
