import { Fragment } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <Fragment>
      <div className="">
        <Navbar />
        <SocialMedia />
        <div className="">
          <About />
          <Skills />
          <Portfolio />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
