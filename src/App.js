import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap, TimelineLite, Power2, Power1, Power3 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import "./App.scss";

import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Solutions from "./components/Solutions";
import Opportunities from "./components/Opportunities";

import { BrowserRouter as Router } from "react-router-dom";

gsap.registerPlugin(CSSRulePlugin);

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/opportunities", name: "Opportunities", Component: Opportunities },
  { path: "/solutions", name: "Solutions", Component: Solutions },
  { path: "/contact-us", name: "Contact", Component: Contact },
];

const App = () => {
  let appReveal = CSSRulePlugin.getRule(".App:after");
  let mainReveal = CSSRulePlugin.getRule(".main:after");
  let homeReveal = CSSRulePlugin.getRule(".scrollmagic-pin-spacer:after");
  let pageReveal = CSSRulePlugin.getRule(".page::after");
  let pReveal = useRef(null);
  // let pageReveal = useRef(null);
  let divReveal = useRef(null);
  let divReveal2 = useRef(null);

  useEffect(() => {

    const onEnter = (node) => {
      let pageReveal = CSSRulePlugin.getRule(".page:after");
      let tl = new TimelineLite();
      console.log("ON ENTER APP", pageReveal, pReveal);
      // RTL EFFECT TRANSITION
      tl.to(pageReveal, {
        duration: 1.5, cssRule: {
          width: "100%",
          ease: "Power2.easeInOut",
          // delay: 0.5,
        }
      });
      tl.from(pageReveal, {
        duration: 3, cssRule: {
          width: "0%",
          ease: "Power2.easeInOut",
          delay: 2.5,
        }
      });
      // gsap.to(pReveal, 3, {
      //   transform: "scale(2)",
      //   // opacity: 0,
      //   // height: "10px",
      //   delay: 1,
      // });
    }
    const onExit = (node) => {
      let el = node.children[0];
      let pseudo = window.getComputedStyle(el, "::after");
      let _width = pseudo.getPropertyValue("width");
      let main = CSSRulePlugin.getRule(".page");
      let mainAfter = CSSRulePlugin.getRule(".page:after");

      console.log("ON EXIT APP", main, mainAfter, el);

      let tl = new TimelineLite();

      // gsap.to(pReveal, 3, {
      //   zIndex: "9999999999999",
      //   // opacity: 1,
      //   height: "75px",
      //   transform: "scale(1)",
      //   delay: 1,
      // });
      tl.to(
        pageReveal,
        {
          duration: 3, cssRule: { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
          "-=1.5"
        });

      // if (appReveal) {
      //   console.log("appReveal :", appReveal);
      //   // gsap.to(el, 1, { opacity: 0, height: "10px", delay: 0.5 });
      //   gsap.to(
      //     appReveal,
      //     1.5,
      //     { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
      //     "-=1.5"
      //   );
      // } else if (mainReveal) {
      //   console.log("mainReveal : ", mainReveal);
      //   // gsap.to(el, 1, { opacity: 0, height: "10px", delay: 0.5 });
      //   gsap.to(
      //     mainReveal,
      //     1.5,
      //     { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
      //     "-=1.5"
      //   );
      // } else if (homeReveal) {
      //   console.log("homeReveal : ", homeReveal);
      //   // gsap.to(el, 1, { opacity: 0, height: "10px", delay: 0.5 });
      //   gsap.to(
      //     homeReveal,
      //     1.5,
      //     { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
      //     "-=1.5"
      //   );
      // } else if (pageReveal) {
      //   console.log("pageReveal : ", pageReveal);
      //   // gsap.to(el, 1, { opacity: 0, height: "10px", delay: 0.5 });
      //   gsap.to(
      //     pageReveal,
      //     1.5,
      //     { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
      //     "-=1.5"
      //   );
      // }
      onEnter();
    });

  // useEffect(() => {
  //   onEnter();
  //   onExit();
  // });

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  onEntering={onEnter}
                  onExit={onExit}
                  unmountOnExit
                >
                  <div className="page">
                    {/* <div
                      ref={(el) => (divReveal = el)}
                      className="div-reveal"
                    ></div>
                    <div
                      ref={(el) => (divReveal2 = el)}
                      className="div-reveal-2"
                    ></div> */}
                    <p ref={pReveal} className="p-reveal">
                      GSAP IMAGE REVEAL
                    </p>
                    <Component />
                    <div>
                      {/* <h1 className="transition-title">La Jazzinière</h1> */}
                    </div>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </Router>
    </>
  );
};


export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <div className="container">
//           <div className="wrapper">
//             <div className="home">
//               <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/opportunities" component={Opportunities} />
//                 <Route exact path="/solutions" component={Solutions} />
//                 <Route exact path="/contact-us" component={Contact} />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <h5>
//           The <b>HAMBRG</b>, is a creative, engineer driven, global agency
//           working on advancing the software, advertising and design communities
//           to new heights.
//         </h5>
//       </div>
//     </div>
//   );
// }
// export default App;
