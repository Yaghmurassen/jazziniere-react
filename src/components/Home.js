import React from "react";
import Title from "./Title";

const Home = () => {
  return (
    <div className="inner">
      <Title
        lineContent="Welcome to React GSAP"
        lineContent2="And Scrollmagic Application"
      />
      <p className="other">
        The <b>HAMBRG</b>, is a creative, engineer driven, global agency working
        on advancing the software, advertising and design communities to new
        heights.
      </p>
    </div>
  );
};

export default Home;
