import React from "react";
import hero from "./hero.jpg";

const Content = () => {
  return (
    <div className="live">
      <img className="img-hero" src={hero} />
      <div className="centered">
        <h1>Republic Day Sale</h1>
        <h2>Live Now</h2>
      </div>
    </div>
  );
};

export default Content;
