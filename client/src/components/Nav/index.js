import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="col-md-3 d-flex justify-content-center mt-2 mt-md-5">
      <div className="col text-center">
        <h3 className="hoverBtn">
          <Link className="ms-2" to="/">
            C.T. Bell
          </Link>
        </h3>
        <div className="d-flex flex-column align-items-center gap-2">
          <Link to="/portfolio">
            <button
              type="button"
              id="portfolioBtn"
              className="btn btn-lg text-light shadow hoverBtn w-100"
            >
              Portfolio
            </button>
          </Link>
          <Link to="/resume">
            <button
              type="button"
              id="resumeBtn"
              className="btn btn-lg text-light shadow hoverBtn w-100"
            >
              Resume
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
