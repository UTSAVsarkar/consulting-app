import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";
import FeatureSelection from "./Components/FeatureSection/FeatureSelection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax pages={5}>
        {/* Global background gradient */}
        <ParallaxLayer offset={0} speed={0.05} factor={5}>
          <div className="floating-shapes">
            {[...Array(200)].map((_, i) => (
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

        {/* Section 0: Hero */}
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="section center">
            <h1 className="hero-title">ReliqX</h1>
            <p className="hero-subtitle">AI & ADVISORY</p>
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

        {/* Contact */}
        <ParallaxLayer offset={4} speed={0.3}>
          <div className="section">
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
