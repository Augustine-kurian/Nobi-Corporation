import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessSection from "./components/BusinessSection";
import { businessData } from "./data/business";
import About from "./components/About";
import ScrollEffect from "./components/ScrollEffect";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <ScrollEffect />
      <Navbar />

      <Hero />
      
      {
        businessData.map((business, index) => (
          <BusinessSection key = {index} {...business} index = {index} />
        ))
      }
      <About />
      {/* <Services /> */}
      <Contact />
      <Footer />
      
      
    </>
  );
}
