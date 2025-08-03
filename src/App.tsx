import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";
import FeatureSelection from "./Components/FeatureSelection";
import ServiceTimeline from "./Components/ServiceTimeline";
import AboutUs from "./Components/AboutUs";
import "./App.css";
import { useRef, useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  Button,
} from "@mui/material";

function App() {
  const [openAbout, setOpenAbout] = useState(false);
  const handleOpenAbout = () => setOpenAbout(true);
  const handleCloseAbout = () => setOpenAbout(false);
  const parallaxRef = useRef<any>(null);

  const scrollToSection = (offset: number) => {
    parallaxRef.current?.scrollTo(offset);
  };

  return (
    <div className="App">
      <Parallax pages={6.5} ref={parallaxRef}>
        {/* Floating Background */}
        <ParallaxLayer offset={0} speed={0.05} factor={6.5}>
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
        </ParallaxLayer>

        {/* Hero Section */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="section center">
            <h1 className="hero-title">ReliqX</h1>
            <p className="hero-subtitle">AI & ADVISORY</p>

            <div className="hero-buttons">
              <button className="neon-button" onClick={handleOpenAbout}>
                ABOUT US
              </button>
              <button className="neon-button" onClick={() => scrollToSection(5.5)}>
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

        {/* Feature Sections */}
        <ParallaxLayer offset={1} speed={0.4}>
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

        <ParallaxLayer offset={2} speed={0.4}>
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

        <ParallaxLayer offset={3} speed={0.4}>
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

        <ParallaxLayer offset={4} speed={0.3} factor={1.2}>
          <div className="section">
            <ServiceTimeline />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.5} speed={0.3} factor={1}>
          <div className="section">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>


      {/* About Us Modal */}
      <Modal open={openAbout} onClose={handleCloseAbout}>
        <Box sx={modalStyle}>
          {/* Top-right Close Icon (optional) */}
          <IconButton
            onClick={handleCloseAbout}
            sx={{ position: "absolute", top: 8, right: 8, color: "#00ffff" }}
          >
          </IconButton>

          {/* Actual Content */}
          <AboutUs />

          {/* Centered Close Button at Bottom */}
          <Box display="flex" justifyContent="center">
            <Button
              variant="outlined"
              color="info"
              onClick={handleCloseAbout}
              sx={{
                borderColor: "#00ffff",
                color: "#00ffff",
                "&:hover": {
                  backgroundColor: "rgba(0,255,255,0.1)",
                  borderColor: "#00ffff",
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div >
  );
}

export default App;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(0,0,0,0.9)",
  border: "2px solid #00ffff",
  boxShadow: "0 0 30px #00ffff66",
  borderRadius: "12px",
  p: 2,
  maxHeight: "90vh",
  overflowY: "auto",
  width: "95vw",
  maxWidth: "1000px",
  backdropFilter: "blur(20px)",
};
