import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="col-md-3 d-flex justify-content-center mt-2 mt-md-5">
      <div className="col text-center ">
        <h3 className=" hoverBtn">
          <a className=" ml-2" href="/">
            C.T. Bell
          </a>
        </h3>
        <button
          type="button"
          id="portfolioBtn"
          className=" btn btn-lg mt-1 ml-2 text-light mb-2 shadow hoverBtn"
        >
          <Link to="/portfolio"> Portfolio</Link>
        </button>
        <button
          type="button"
          id="resumeBtn"
          className=" btn btn-lg mt-1 ml-2 text-light mb-2 shadow hoverBtn"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Nav;
