import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {
  TweenMax,
  TimelineMax,
  Power1,
  Power2,
  Back,
  Expo,
  Power4
} from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { CSSRulePlugin, CSSPlugin } from "gsap/all";

import full from "./../images/home/full.png";
import middle from "./../images/home/middle.png";
import bas from "./../images/home/immeubletest.png";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
// import "imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller({});
    this.scale = React.createRef();
  }

  componentDidMount() {
    gsap.registerPlugin(CSSPlugin);
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    TweenMax.defaultOverwrite = false;
    console.log(document.body.querySelector(".three"));
    let timeline = new TimelineMax({
      onComplete: function() {
        gsap.to(".one", 0.0001, {
          transform: "scale(1)"
        });
        console.log("onComlplete : ", document.body.style.width);
      }
    });

    timeline
      .fromTo(
        ".three",
        10,
        {
          bottom: "-120px"
        },
        { y: -1400, bottom: -675 },
        "-=10"
      )
      .fromTo(
        ".two",
        10,
        {
          y: 90
          // height: "105vh"
          // transform: "scale(1.34)"
        },
        {
          y: -400
        },
        "-=10"
      )
      .fromTo(
        ".one",
        10,
        {
          y: 0
        },
        {
          y: -350
          // transform: "scale(1.3)"
        },
        "-=10"
      )
      .fromTo(
        ".one",
        10,
        {
          y: 0
        },
        {
          // y: -350
          transform: "scale(1.3)"
        },
        "-=10"
      )
      .to(
        ".one",
        10,
        {
          transform: "scale(1)"
        },
        "-=10"
      )
      .to(
        ".title",
        8,
        {
          y: "-50%",
          opacity: 0
        },
        "-=10"
      )
      .to(
        ".btn-groupe, .btn-culture, .btn-collectif, .btn-propos",
        8,
        {
          opacity: 1,
          display: "block"
        },
        "-=10"
      );

    new ScrollMagic.Scene({
      triggerElement: "section",
      duration: "100%", // scroll distance
      triggerHook: 0
    })
      .setTween(timeline)
      .setPin("section") // pins the element for the the scene's duration
      .addTo(this.controller); // assign the scene to the controller
  }

  HoverGroup = () => {
    console.log("On Hover Group");
    gsap.fromTo(
      ".title-groupe",
      1,
      {
        x: -100,
        opacity: 0,
        display: "inline-block"
      },
      {
        x: 0,
        opacity: 1
      }
    );
    gsap.to(".btn-groupe", 1, {
      backgroundColor: "rgba(0, 0, 0, 0.67)"
    });
  };

  HoverLeaveGroup = () => {
    console.log("On Leave Group");
    gsap.to(".title-groupe", 0.3, {
      opacity: 0
      // x: 70
    });
    gsap.to(".btn-groupe", 0.7, {
      backgroundColor: "transparent"
    });
  };

  HoverCulture = () => {
    console.log("On Hover Culture");
    gsap.fromTo(
      ".title-culture",
      1,
      {
        x: -100,
        opacity: 0,
        display: "block"
      },
      {
        x: 0,
        opacity: 1
      }
    );
    gsap.to(".btn-culture", 1, {
      backgroundColor: "rgba(0, 0, 0, 0.67)"
    });
  };

  HoverLeaveCulture = () => {
    console.log("On Leave Culture");
    gsap.to(".title-culture", 0.3, {
      opacity: 0
    });
    gsap.to(".btn-culture", 0.7, {
      backgroundColor: "transparent"
    });
  };

  HoverCollectif = () => {
    console.log("On Hover Collectif");
    gsap.fromTo(
      ".title-collectif",
      1,
      {
        x: -100,
        opacity: 0,
        display: "block"
      },
      {
        x: 0,
        opacity: 1
      }
    );
    gsap.to(".btn-collectif", 1, {
      backgroundColor: "rgba(0, 0, 0, 0.67)"
    });
  };

  HoverLeaveCollectif = () => {
    console.log("On Leave Collectif");
    gsap.to(".title-collectif", 0.3, {
      opacity: 0
    });
    gsap.to(".btn-collectif", 0.7, {
      backgroundColor: "transparent"
    });
  };

  HoverPropos = () => {
    console.log("On Hover propos");
    gsap.fromTo(
      ".title-propos",
      1,
      {
        x: -100,
        opacity: 0,
        display: "block"
      },
      {
        x: 0,
        opacity: 1
      }
    );
    gsap.to(".btn-propos", 1, {
      backgroundColor: "rgba(0, 0, 0, 0.67)"
    });
  };

  HoverLeavePropos = () => {
    console.log("On Leave propos");
    gsap.to(".title-propos", 0.3, {
      opacity: 0
    });
    gsap.to(".btn-propos", 0.7, {
      backgroundColor: "transparent"
    });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="title">Jazzinière</div>
          <div className="images">
            <div className="image-wrapper one" ref={this.scale}>
              <img src={full} alt="full" />
            </div>
            <div className="image-wrapper two">
              <img src={middle} alt="middle" />
            </div>
            <div className="image-wrapper three">
              <img src={bas} style={{ height: "200vh" }} alt="bas" />
            </div>
          </div>
          <button
            className="btn btn-groupe"
            onMouseEnter={() => this.HoverGroup()}
            onMouseLeave={() => this.HoverLeaveGroup()}
          >
            <Link className="title-groupe" to="/opportunities">
              Voir les groupes
            </Link>
          </button>
          <button
            className="btn btn-culture"
            onMouseEnter={() => this.HoverCulture()}
            onMouseLeave={() => this.HoverLeaveCulture()}
          >
            <Link to="/culture" className="title-culture">
              Voir la culture
            </Link>
          </button>
          <button
            className="btn btn-collectif"
            onMouseEnter={() => this.HoverCollectif()}
            onMouseLeave={() => this.HoverLeaveCollectif()}
          >
            <Link to="/collectif" className="title-collectif">
              Voir les collectifs
            </Link>
          </button>
          <button
            className="btn btn-propos"
            onMouseEnter={() => this.HoverPropos()}
            onMouseLeave={() => this.HoverLeavePropos()}
          >
            <Link to="/a-propos" className="title-propos">
              A propos
            </Link>
          </button>

          {/* <footer>
            <div className="footer-wrapper">
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Dribble</li>
                <li>Twitter</li>
              </ul>
            </div>
          </footer> */}
        </div>
      </section>
    );
  }
}
