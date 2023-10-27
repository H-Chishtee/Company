import React from "react";
import {
  About,
  Work,
  Footer,
  Header,
  Skills,
  Testimonial,
  MFooter,
} from "./Container";
import { NavBar } from "./Components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <MFooter />
    </div>
  );
};

export default App;
