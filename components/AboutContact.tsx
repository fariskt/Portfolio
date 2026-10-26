import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function AboutContact() {
  return (
    <section id="contact" className="relative border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </section>
  );
}
