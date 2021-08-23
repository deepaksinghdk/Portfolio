import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="src/components/Services.js">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/deepak-k-singh-b207941ab/">Portfolio</a>
              </li>
              <li>
                <a href="">Resume</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
