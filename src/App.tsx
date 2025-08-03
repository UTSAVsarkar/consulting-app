import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";
import FeatureSelection from "./Components/FeatureSelection";
import ServiceTimeline from "./Components/ServiceTimeline";
import AboutUs from "./Components/AboutUs";
import "./App.css";
import { useRef } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useMediaQuery, useTheme } from "@mui/material";

function App() {
  const parallaxRef = useRef<any>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToSection = (offset: number) => {
    parallaxRef.current?.scrollTo(offset);
  };

  return (
    <div className="App">
      <Parallax pages={isMobile ? 8.5 : 7.5} ref={parallaxRef}>
        {/* Floating Background */}
        <ParallaxLayer offset={0} speed={0.05} factor={7.5}>
          <div className="floating-shapes">
            {[...Array(500)].map((_, i) => (
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
        </ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="section center">

            <h1 className="hero-title">ReliqX</h1>
            <p className="hero-subtitle">AI & ADVISORY</p>

            <div className="hero-buttons">
              <button className="neon-button" onClick={() => scrollToSection(6.5)}>
                CONTACT
              </button>
            </div>

            <div className="mouse-scroll" onClick={() => scrollToSection(1)}>
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span className="scroll-text">Scroll</span>
            </div>
          </div>
        </ParallaxLayer>

        {/* About Us (now full page) */}
        <ParallaxLayer offset={1} speed={0.4}>
          <div className="section">
            <AboutUs />
          </div>
        </ParallaxLayer>

        {/* Features */}
        <ParallaxLayer offset={isMobile ? 2.5 : 2} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="01"
              feature="Automate"
              para="Our automation solutions are tailored to simplify complex processes,
                saving time and resources for businesses."
              points={[
                "Simplify complex business processes",
                "Save time and resources efficiently",
                "Boost productivity through automation",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 3.5 : 3} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="02"
              feature="Analyse"
              para="Unlock valuable insights and make informed decisions with our powerful data analytics solutions."
              points={[
                "Gain actionable insights from your data",
                "Drive smarter decisions with analytics",
                "Visualize trends and performance clearly",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 4.5 : 4} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="03"
              feature="Customize"
              para="We understand that every industry is unique. Our customizable platforms adapt to your specific needs."
              points={[
                "Tailored workflows for every business type",
                "Seamless integration with your existing tools",
                "Flexible modules that grow with your needs",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 5.5 : 5} speed={0.3} factor={1.2}>
          <div className="section">
            <ServiceTimeline />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 7 : 6.5} speed={0.3} factor={1}>
          <div className="section" style={{ position: "relative" }}>
            <Contact />

            {/* Scroll Up Arrow */}
            <div
              onClick={() => parallaxRef.current.scrollTo(0)}
              style={{
                position: "absolute",
                bottom: -100,
                left: "50%",
                transform: "translateX(-50%)",
                cursor: "pointer",
                color: "#555",
                animation: "bounce 1.5s infinite",
              }}
            >
              <KeyboardArrowUpIcon sx={{ fontSize: 80, color: 'white' }} />
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
