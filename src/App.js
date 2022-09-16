import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveOut, Sticky } from "react-scroll-motion"

function App() {
  return (
      <ScrollContainer>
        <ScrollPage page={0}  >
            <Animator animation={batch( )} >
                <Header />
            </Animator>
        </ScrollPage>
        <ScrollPage page={0}  >
            <Animator animation={batch(FadeIn(), Sticky())}>
                <Intro />
            </Animator>
        </ScrollPage>
        <ScrollPage page={0} >
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <Projects />
            </Animator>
        </ScrollPage>
      </ScrollContainer>
  );
}

export default App;
