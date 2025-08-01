import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";
import AutomationFeature from "./Components/AutomationFeature";
import AnalyzeFeature from "./Components/AnalyzeFeature";
import CustomizeFeature from "./Components/CustomizeFeature";

function App() {
  return (
    <>
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}>
          Hello
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <AutomationFeature />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
          <AnalyzeFeature />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <CustomizeFeature />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.3}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
