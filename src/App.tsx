import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";
import FeatureSelection from "./Components/FeatureSelection";
import ServiceTimeline from "./Components/ServiceTimeline";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax pages={6.5}>
        {/* Global background gradient with floating shapes */}
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
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={0.3}>
          <div className="section interlude">
            <h2 className="interlude-text">Empowering businesses through automation</h2>
          </div>
        </ParallaxLayer>


        {/* Feature 1 */}
        <ParallaxLayer offset={1} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="01"
              feature="Automate"
              para="Our automation solutions are tailored to simplify complex processes,
              saving time and resources for businesses. Experience seamless operations
              and increased efficiency with our innovative automation tools."
              points={[
                "Simplify complex business processes",
                "Save time and resources efficiently",
                "Boost productivity through automation",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={0.3}>
          <div className="section interlude">
            <h2 className="interlude-text">Harness the power of data for smarter decisions</h2>
          </div>
        </ParallaxLayer>


        {/* Feature 2 */}
        <ParallaxLayer offset={2} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="02"
              feature="Analyse"
              para="Unlock valuable insights and make informed decisions with our powerful
              data analytics solutions. Dive deep into your data to drive strategic
              actions and achieve your business goals."
              points={[
                "Gain actionable insights from your data",
                "Drive smarter decisions with analytics",
                "Visualize trends and performance clearly",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} speed={0.3}>
          <div className="section interlude">
            <h2 className="interlude-text">Built to adapt, scale, and transform</h2>
          </div>
        </ParallaxLayer>


        {/* Feature 3 */}
        <ParallaxLayer offset={3} speed={0.4}>
          <div className="section">
            <FeatureSelection
              num="03"
              feature="Customize"
              para="We understand that every industry is unique. Our customizable platforms
              adapt to your specific needs, ensuring optimal performance and maximum
              results for your business."
              points={[
                "Tailored workflows for every business type",
                "Seamless integration with your existing tools",
                "Flexible modules that grow with your needs",
              ]}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={0.3}>
          <div className="section interlude">
            <h2 className="interlude-text">Our services guide you from ideation to execution</h2>
          </div>
        </ParallaxLayer>


        {/* Services Section - Adjusted height */}
        <ParallaxLayer offset={4} speed={0.3} factor={1.2}>
          <div className="section">
            <ServiceTimeline />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.3}>
          <div className="section interlude">
            <h2 className="interlude-text">
              Let’s unlock your potential
            </h2>
          </div>
        </ParallaxLayer>

        {/* Contact Section - Adjusted offset to avoid overlap */}
        <ParallaxLayer offset={5.5} speed={0.3} factor={1}>
          <div className="section">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
