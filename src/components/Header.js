import React, { useState, useEffect } from "react";
import { withRouter, Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">LA Jazziniere</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
            {/* <div className="header"> */}
            {/* <NavLink
                to="/"
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Home
              </NavLink> */}
            {/* <NavLink
                to="/opportunities"
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Opportunities
              </NavLink>
              <NavLink
                to="/contact-us"
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Contact
              </NavLink>
              <NavLink
                to="/solutions"
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red"
                }}
              >
                Solution
              </NavLink> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
