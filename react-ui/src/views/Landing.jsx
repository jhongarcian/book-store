import React from "react";
import { Hero, TopBooks, Categories } from "../components/Landing";

function Landing() {
  return (
    <main className="main__container">
      <Hero />
      <TopBooks />
      <Categories />
    </main>
  );
}
export default Landing;
