import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap, Power2, Power1 } from "gsap";
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

function App() {
  let mainReveal = CSSRulePlugin.getRule(".scrollmagic-pin-spacer:before");
  let appli = useRef(null);

  const onEnter = (node) => {
    console.log("appli ///////////////////////// ", appli);
    // console.log("onEnter document.body : ", document.body);
    // console.log(
    //   "onEnter Element : ",
    //   node.children[0].firstElementChild.querySelector(".line-wrap")
    // );
    // console.log("onEnter Element : ", node.children[0].firstElementChild);

    // gsap.from(
    //   [node.children[0].firstElementChild, node.children[0].lastElementChild],
    //   0.6,
    //   {
    //     // y: 30,
    //     delay: 0.6,
    //     ease: Power3.InOut,
    //     opacity: 1
    //     // stagger: {
    //     //   amount: 0.6
    //     // }
    //   }
    // );
    gsap.to(mainReveal, 1.5, {
      width: "100%",
      ease: Power1.easeInOut,
      delay: 0.5,
    });
    gsap.to(".transition-title", 0.2, {
      // display: "block",
      opacity: 1,
    });
    gsap.from(".transition-title", 1, {
      // display: "block !important",
      // delay: 0.8,
      ease: "power3.out",
      // y: 64,
      height: "15px",
      zIndex: 9999,
    });
    // gsap.to(mainReveal, 2, {
    //   left: "0px",
    //   width: "0%",
    //   ease: Power2.easeInOut,
    //   delay: 1
    // });
    // gsap.to(".transition-title", 1, {
    //   opacity: 0,
    //   ease: "power3.out",
    //   delay: -2
    // });
  };
  const onExit = (node) => {
    console.log("appli ///////////////////////// ", appli);
    gsap.to(mainReveal, 2, {
      left: "0px",
      width: "0%",
      ease: Power2.easeInOut,
      delay: 1,
    });
    gsap.to(".transition-title", 1, {
      opacity: 0,
      ease: "power3.out",
      delay: -2,
    });
    // console.log(
    //   "onExit Element : ",
    //   node.children[0].firstElementChild.childNodes[0].className
    // );
    // console.log(
    //   "onExit Element : ",
    //   node.querySelector(".inner"),
    //   node.children[0].firstElementChild
    // );
    // console.log("node: ", node);

    console.log("ON EXIT");
    // gsap.to(
    //   [
    //     node.children[0].firstElementChild,
    //     node.children[0],
    //     node.children[0].lastElementChild
    //   ],
    //   0.6,
    //   {
    //     // y: -30,
    //     ease: "power3.InOut",
    //     stagger: {
    //       amount: 0.2
    //     }
    //   }
    // );
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    onEnter();
    onExit();
  });

  return (
    <>
      <Router>
        <div className="App" ref={(el) => (appli = el)}>
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
                    {/* <div className="test" /> */}
                    <Component />
                    <div>
                      <h1 className="transition-title">La Jazzinière</h1>
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
}

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
