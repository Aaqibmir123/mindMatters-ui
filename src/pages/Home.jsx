import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import AppointmentForm from '../components/AppointmentForm';
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
        <Doctors />
        <AppointmentForm />
        <Testimonials />
        <StatsBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}