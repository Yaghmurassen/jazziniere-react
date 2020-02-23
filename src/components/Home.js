import React from "react";
import gsap from "gsap";
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import Title from "./Title";
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
        // gsap.to("section", 0.1, {
        //   height: "125vh"
        // });
        console.log("onCOmlplete : ", document.body.style.width);
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

  render() {
    return (
      <section>
        {/* <nav>
          <div className="nav-wrapper">
            <h4>Ready co.</h4>
            <a className="button" href="#">
              Sign Up
            </a>
          </div>
        </nav> */}
        <div className="container">
          <div className="title">Jazzinière</div>
          <div className="images">
            <div className="image-wrapper one" ref={this.scale}>
              <img src={full} />
            </div>
            <div className="image-wrapper two">
              <img src={middle} />
            </div>
            <div className="image-wrapper three">
              <img src={bas} style={{ height: "200vh" }} />
            </div>
          </div>

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

        {/* <button className="btn btn-home btn-concert">
          <a href="/concert.html">Go to barba's page</a>
        </button>
        <button className="btn btn-home btn-goodcase">
          <a href="/goodcaseoftheblues.html">Go to barba's page</a>
        </button>
        <button className="btn btn-home btn-contact">
          <a href="/contact.html">Go to barba's page</a>
        </button> */}
      </section>
    );
  }
}
