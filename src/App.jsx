import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Policies from './sections/Policies';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Policies />
      <Footer />
    </div>
  );
}