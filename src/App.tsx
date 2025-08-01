import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          Hello
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          Hello
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.3}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
