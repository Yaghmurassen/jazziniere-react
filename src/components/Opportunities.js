import React, { useRef, useEffect, Fragment } from "react";
import "../App.scss";
import Back from "../images/home/back.jpg";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Opportunities = () => {
  let contain = useRef(null);
  let main = useRef(null);
  let image = useRef(null);
  let pReveal = useRef(null);
  let mainReveal = CSSRulePlugin.getRule(".main:after");
  let mainReveal2 = CSSRulePlugin.getRule(".main:after");
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    console.log("Opportunites useEffect() : ", mainReveal, pReveal);
    // RTL EFFECT TRANSITION
    // tl.to(mainReveal, 1, {
    //   width: "100%",
    //   ease: "Power2.easeInOut",
    //   delay: 0.5,
    // });
    // tl.to(pReveal, 1, { opacity: 1, height: "75px", delay: 0.5 });
    tl.to(pReveal, 4, { opacity: 0, height: "10px", delay: 0.5 });
    tl.to(
      mainReveal,
      3.5,
      { width: "0%", ease: "Power2.easeInOut", delay: 2.5 },
      "-=1.5"
    );

    // tl.to(mainReveal, 0, { transform: "scale(2)" });
    // tl.to(
    //   mainReveal,
    //   1.5,
    //   {
    //     left: "-25%",
    //     width: "0%",
    //     transform: "skewX(10deg)",
    //     ease: "Power1.easeOut"
    //   }
    // );

    // LTR EFFECT TRANSITION
    // document.body.scrollTop = 0;
    // console.log(document.body.scrollTop);
    // tl.to(mainReveal2, 1.5, { width: "100%", ease: "Power1.easeInOut" });
    // tl.to("body", 0, { height: "96vh" }, "-=3");
    // tl.to(pReveal, 1, { opacity: 1, height: "75px", delay: 0.5 });
    // tl.to(pReveal, 1, { opacity: 0, height: "10px", delay: 0.5 });
    // tl.to(
    //   mainReveal2,
    //   1.5,
    //   {
    //     right: 0,
    //     width: "0%",
    //     ease: "Power2.easeInOut",
    //     delay: 0.5,
    //   },
    //   "-=1.5"
    // );

    // tl.to(container, 0, { css: { visibility: "visible" } });
    // tl.to(imageReveal, 3.4, { width: "0%", ease: Power2.easeInOut });
    // tl.from(image, 3.4, {
    //   scale: 1.6,
    //   ease: Power2.easeInOut,
    //   delay: -1.4
    // });
  }, [mainReveal, pReveal, tl]);

  return (
    <Fragment>
      <div className="main" ref={(el) => (main = el)}>
        <p ref={(el) => (pReveal = el)}>GSAP IMAGE REVEAL</p>
        <div className="contain" ref={(el) => (contain = el)}>
          <>
            {/* <img
                ref={el => (image = el)}
                src={Back}
                style={{maxWidth: "100%"}}
                alt="back"
              /> */}
            <h1>La Fucking Jazziniere</h1>
          </>
        </div>
      </div>
    </Fragment>
  );
};

export default Opportunities;
