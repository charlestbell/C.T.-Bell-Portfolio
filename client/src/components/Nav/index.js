import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="col-md-3 d-flex justify-content-center mt-2 mt-md-5">
      <div className="col text-center ">
        <h3 className=" hoverBtn">
          <Link className=" ml-2" to="/">
            C.T. Bell
          </Link>
        </h3>
        <Link to="/portfolio">
          <button
            type="button"
            id="portfolioBtn"
            className=" btn btn-lg mt-1 ml-2 text-light mb-2 shadow hoverBtn"
          >
            Portfolio
          </button>
        </Link>
        <Link to="/resume">
          <button
            type="button"
            id="resumeBtn"
            className=" btn btn-lg mt-1 ml-2 text-light mb-2 shadow hoverBtn"
          >
            Resume
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
