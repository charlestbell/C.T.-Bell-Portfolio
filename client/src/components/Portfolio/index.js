import React from "react";

function Portfolio() {
  return (
    <div className="contentContainer shadow">
      <div className="row">
        <div className="col p-3 ">
          <h2 className="ml-4 mb-3 mt-6">Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="col p-4 d-flex flex-wrap justify-content-around">
          <div className="card mb-4" style={{ width: "23rem" }}>
            <img src="dabblr.jpg" className="card-img-top" alt="ctyFaktz"></img>
            <div className="card-body">
              <h5 className="card-title">
                Dabblr - The best tutorials the world has to offer
              </h5>
              <p className="card-text">
                A social education platform that aggregates the best tutorials
                on every topic.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://dabblr-tutorials.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Relten98/Dabblr"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
            <img
              src="/ctyFaktz.jpg"
              className="card-img-top"
              alt="ctyFaktz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">ctyFaktz - City Research made fun!</h5>
              <p className="card-text">
                Find out fun facts about cities, compare cities together and
                have fun.
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://charlestbell.github.io/ctyFaktz/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/ctyFaktz"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
            <img
              src="/Weather Dashboard.jpg"
              className="card-img-top"
              alt="Weather Dashboard"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Beautiful Weather Dashboard</h5>
              <p className="card-text">5 Day weather</p>
            </div>

            <div className="card-body">
              <a
                href="https://charlestbell.github.io/Weather-Dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/Weather-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>

          <div className="card mb-4" style={{ width: "23rem" }}>
            <img
              src="/Day Scheduler.jpg"
              className="card-img-top"
              alt="Day Scheduler"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-body">
              <a
                href="https://charlestbell.github.io/Day-Scheduler/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/charlestbell/Day-Scheduler"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
