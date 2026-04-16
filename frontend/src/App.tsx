
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Features from './components/Features';
import Process from './components/Process';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <BestSellers />
      <Features />
      <Process />
      <Reviews />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
