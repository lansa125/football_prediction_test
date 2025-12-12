import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TelegramCTA from './components/TelegramCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <TelegramCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
