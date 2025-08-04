// App.tsx
import { useRef } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import ServiceTimeline from "./Components/ServiceTimeline";
import FeatureSelection from "./Components/FeatureSelection";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Floating Background */}
      <div className="floating-shapes">
        {[...Array(300)].map((_, i) => (
          <span
            key={i}
            className="shape"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="section center">
        <h1 className="hero-title">ReliqX</h1>
        <p className="hero-subtitle">AI & ADVISORY</p>

        <div className="hero-buttons">
          <button className="neon-button" onClick={() => scrollToRef(contactRef)}>Connect Us</button>
        </div>

        <div className="mouse-scroll" onClick={() => scrollToRef(aboutRef)}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      {/* About */}
      <section className="section" ref={aboutRef}>
        <AboutUs />
      </section>

      {/* Features */}
      <section className="section">
        <FeatureSelection
          num="01"
          feature="Automate"
          para="Simplify complex workflows through AI automation."
          points={["Reduce manual tasks", "Streamline operations", "Faster turnaround"]}
        />
      </section>

      <section className="section">
        <FeatureSelection
          num="02"
          feature="Analyse"
          para="Uncover insights from data with intelligent analytics."
          points={["Predict trends", "Optimize strategies", "Real-time dashboards"]}
        />
      </section>

      <section className="section">
        <FeatureSelection
          num="03"
          feature="Customize"
          para="Every business is unique. Our systems adapt to you."
          points={["Flexible modules", "Personalized workflows", "Seamless integration"]}
        />
      </section>

      {/* Timeline */}
      <section className="section">
        <ServiceTimeline />
      </section>

      {/* Contact */}
      <section className="section" ref={contactRef} style={{ position: "relative" }} id="contact">
        <Contact />
        <div
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: 70 }} />
        </div>
      </section>
    </div>
  );
}

export default App;
