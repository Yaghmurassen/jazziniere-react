import React, { useState } from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import "./App.scss";

import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Solutions from "./components/Solutions";
import Opportunities from "./components/Opportunities";

import { BrowserRouter as Router, Switch } from "react-router-dom";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/opportunities", name: "Opportunities", Component: Opportunities },
  { path: "/solutions", name: "Solutions", Component: Solutions },
  { path: "/contact-us", name: "Contact", Component: Contact }
];

function App() {
  const onEnter = node => {
    // console.log("onEnter document.body : ", document.body);
    // console.log(
    //   "onEnter Element : ",
    //   node.children[0].firstElementChild.querySelector(".line-wrap")
    // );
    gsap.from(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: 30,
        delay: 0.6,
        ease: "power3.InOut",
        opacity: 0,
        stagger: {
          amount: 0.6
        }
      }
    );
  };

  const onExit = node => {
    // console.log(
    //   "onExit Element : ",
    //   node.children[0].firstElementChild.childNodes[0].className
    // );
    // console.log("onExir Element : ", node.querySelector(".inner"));
    gsap.to(
      [node.children[0].firstElementChild, node.children[0].lastElementChild],
      0.6,
      {
        y: -30,
        ease: "power3.InOut",
        stagger: {
          amount: 0.2
        }
      }
    );
  };

  return (
    <>
      <Router>
        <div className="App">
          <Header />
          {/* <div className="container"> */}
          {/* <div className="wrapper"> */}
          {/* <div className="home"> */}
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  onExit={onExit}
                  onEntering={onEnter}
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
          {/* <Home /> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
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
