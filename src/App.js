import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className=" text-gray-400 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer><a href="https://storyset.com/work">Work illustrations by Storyset</a></footer>
    </main>
    
  );
}
