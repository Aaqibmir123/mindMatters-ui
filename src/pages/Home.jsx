import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import DrWaris from '../components/DrWaris';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import StatsBanner from '../components/StatsBanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DrWaris />
        <Doctors />
        <Testimonials />
        <StatsBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
