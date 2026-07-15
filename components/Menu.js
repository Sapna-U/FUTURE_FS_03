import Divider from './Divider';

const menu = [
  {
    category: 'Filter Coffee',
    items: [
      { name: 'Classic Filter Coffee', price: '₹40' },
      { name: 'Strong Degree Coffee', price: '₹50' },
      { name: 'Iced Filter Coffee', price: '₹60' },
    ],
  },
  {
    category: 'Tiffin',
    items: [
      { name: 'Ghee Roast Dosa', price: '₹70' },
      { name: 'Idli (4 pcs) with Chutney', price: '₹50' },
      { name: 'Pongal with Vadai', price: '₹80' },
    ],
  },
  {
    category: 'Light Meals',
    items: [
      { name: 'Curd Rice Bowl', price: '₹70' },
      { name: 'Vegetable Sandwich', price: '₹60' },
      { name: 'Banana Chips & Filter Coffee Combo', price: '₹90' },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-paper border-y border-line py-16">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <Divider />
        <h2 className="font-display text-3xl text-coffee text-center mb-10">Menu Highlights</h2>

        <div className="grid sm:grid-cols-3 gap-10">
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="font-display italic text-gold text-lg mb-4 text-center sm:text-left">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-2 border-b border-dotted border-line pb-2"
                  >
                    <span className="text-sm text-coffee">{item.name}</span>
                    <span className="text-sm text-rust font-medium whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
