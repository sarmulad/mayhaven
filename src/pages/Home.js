import React from "react";
import { Programs, Gallery, Hero,  About, Event } from "components/home";
import { Wrapper } from "components/navigation";

const Home = () => {
  return (
    <Wrapper showTopNav={false}>
      <Hero />
      <About />
      <Programs/>
      <Event/>
      <Gallery />
    </Wrapper>
  );
};

export default Home;
