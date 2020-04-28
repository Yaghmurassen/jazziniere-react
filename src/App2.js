import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap, TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

import "./App.scss";

import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Solutions from "./components/Solutions";
import Ania from "./components/Ania";

import { BrowserRouter as Router } from "react-router-dom";

gsap.registerPlugin(CSSRulePlugin);

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/ania", name: "Ania", Component: Ania },
  { path: "/solutions", name: "Solutions", Component: Solutions },
  { path: "/contact-us", name: "Contact", Component: Contact },
];

const App = () => {
  gsap.registerPlugin(CSSRulePlugin);

  let appRevealAfter = CSSRulePlugin.getRule(".App:after");
  let mainReveal = CSSRulePlugin.getRule(".main:after");
  let homeReveal = CSSRulePlugin.getRule(".scrollmagic-pin-spacer:after");
  let pageReveal = CSSRulePlugin.getRule(".page:after");

  let pageRevealOg = useRef(null);
  let appReveal = useRef(null);
  let pReveal = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(CSSRulePlugin);

    console.log("USE EFFECT");
    onEnter();
    onExit();
  }, []);

  const onEnter = (node) => {
    gsap.registerPlugin(CSSRulePlugin);

    let tl = new TimelineLite();
    // let el = node.children[0];
    let pageReveal = CSSRulePlugin.getRule(".pagee");
    let pageRevealAfter = CSSRulePlugin.getRule(".pagee::after");

    console.log(
      "ON ENTER APP",
      node,
      appReveal,
      appRevealAfter,
      //   el,
      pageReveal,
      pageRevealOg,
      pageRevealAfter
    );
    tl.to(pageRevealAfter, {
      duration: 1.5,
      cssRule: {
        width: "100%",
        ease: "Power2.easeInOut",
        // delay: 0.5,
      },
    });
    tl.from(pageRevealAfter, {
      duration: 3,
      cssRule: {
        width: "0%",
        ease: "Power2.easeInOut",
        delay: 2.5,
      },
    });
  };

  const onExit = (node) => {
    gsap.registerPlugin(CSSRulePlugin);

    let tl = new TimelineLite();
    // let el = node.children[0];
    let main = CSSRulePlugin.getRule(".pagee");
    let mainAfter = CSSRulePlugin.getRule(".pagee:after");

    console.log(
      "ON EXIT APP",
      node,
      appReveal,
      appRevealAfter,
      main,
      pageRevealOg,
      mainAfter
    );

    tl.to(mainAfter, {
      duration: 3,
      cssRule: { width: "0%", ease: "Power2.easeInOut", delay: 0.5 },
    });
  };

  return (
    <>
      <Router>
        <div className="App" ref={(el) => (appReveal = el)}>
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
                  <div className="pagee" ref={(el) => (pageRevealOg = el)}>
                    <div className="reveal">
                      <p ref={(el) => (pReveal = el)} className="p-reveal">
                        {/* GSAP IMAGE REVEAL */}
                      </p>
                      <Component />
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