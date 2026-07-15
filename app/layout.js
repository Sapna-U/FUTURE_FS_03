import { Fraunces, Work_Sans } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const body = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Southern Brew — Filter Coffee & Café, Erode',
  description:
    'Southern Brew is a filter coffee and light-meals café in Erode, Tamil Nadu. View our menu, hours, and location.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-cream text-coffee font-body antialiased">{children}</body>
    </html>
  );
}
