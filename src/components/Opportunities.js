import React, { useRef, useEffect, Fragment } from "react";
import "../App.scss";
import Back from "../images/home/back.jpg";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Opportunities = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 3.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 3.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
  });

  return (
    <Fragment>
      <div className="main">
        <p>GSAP IMAGE REVEAL</p>
        <div className="container" ref={el => (container = el)}>
          <>
            <div className="img-container">
              <img
                ref={el => {
                  image = el;
                }}
                src={Back}
                alt="back"
              />
            </div>
          </>
        </div>
      </div>
    </Fragment>
  );
};

export default Opportunities;

// import React from "react";

// import Title from "./Title";

// const Opportunities = () => {
//   return (
//     <div className="inner">
//       <Title lineContent="That's something" lineContent2="you can't deny" />
//       <div>
//         <p className="other">
//           By emphasizing these energies, Bel offers its associates unique career
//           opportunities, thanks in particular to the diversity of its business..
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Opportunities;
