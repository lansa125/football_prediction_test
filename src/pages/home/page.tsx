import { useState } from 'react';
import Hero from './components/Hero';
import ProductIntro from './components/ProductIntro';
import Team from './components/Team';
import Origin from './components/Origin';
import Technology from './components/Technology';
import TelegramCTA from './components/TelegramCTA';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductIntro />
      <Team />
      <Origin />
      <Technology />
      <TelegramCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}
