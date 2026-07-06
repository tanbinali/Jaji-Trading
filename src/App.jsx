import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductsGallery from "./components/ProductsGallery";
import StoreMap from "./components/StoreMap";
import FAB from "./components/FAB";
import ReviewsSection from "./components/ReviewSection";

function App() {
  return (
    <>
      <Navbar />

      <section id="hero" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="cards" className="scroll-mt-28">
        <Cards />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutUs />
      </section>

      <section id="products" className="scroll-mt-28">
        <ProductsGallery />
      </section>

      <section id="contact" className="scroll-mt-28">
        <Contact />
      </section>

      <section id="map" className="scroll-mt-28">
        <StoreMap />
      </section>

      <section id="reviews" className="scroll-mt-28">
        <ReviewsSection />
      </section>

      <Footer />
      <FAB />
    </>
  );
}

export default App;
