import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import Policies from './sections/Policies';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Reviews/>
      <Policies />
      <Footer />
    </div>
  );
}