import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Visit from '@/components/Visit';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Visit />
      </main>
    </>
  );
}
