import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import ServiceArea from "./components/ServiceArea";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Home />
        <About />
        <ServiceArea />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
