import React from "react";

import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

// import GlobalStyle from "./Components/GlobalStyle";

// import "./style.css";

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle/> */}
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;