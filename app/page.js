import Navbar from "../components/Navbar";
import AgeGate from "../components/AgeGate";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import ContactLocation from "../components/ContactLocation";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <AgeGate />
      <Navbar />

      <main>
        {/* Hero stays on the base bg for contrast */}
        <Hero />

        {/* About: first tint */}
        <section id="about" className="section tint-a">
          <div className="container">
            <About />
          </div>
        </section>

        {/* Products: second tint */}
        <section id="products" className="section tint-b">
          <div className="container">
            <Products />
          </div>
        </section>

        {/* Visit/Contact: third tint */}
        <section id="visit" className="section tint-c">
          <div className="container">
            <ContactLocation />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
