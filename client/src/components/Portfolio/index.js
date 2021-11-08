import React from "react";

import dabblr from "../../images/dabblr.jpg";
import ctyFaktz from "../../images/ctyFaktz.jpg";
import weatherDashboard from "../../images/Weather Dashboard.jpg";
import dayScheduler from "../../images/Day Scheduler.jpg";
import characterTavern from "../../images/Character Tavern.jpg";

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
            <img
              src={characterTavern}
              className="card-img-top"
              alt="ctyFaktz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Character Tavern - Interactive DND Character Creator
              </h5>
              <p className="card-text">
                Styled after rpg games from the 80s and 90s. Character Creator
                makes creating a DND character easy, intuitive and fun!
              </p>
            </div>

            <div className="card-body">
              <a
                href="https://character-creator-tavern.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Hammonds526/CharacterCreator"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Repo
              </a>
            </div>
          </div>
          <div className="card mb-4" style={{ width: "23rem" }}>
            <img src={dabblr} className="card-img-top" alt="ctyFaktz"></img>
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
            <img src={ctyFaktz} className="card-img-top" alt="ctyFaktz"></img>
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
              src={weatherDashboard}
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
              src={dayScheduler}
              className="card-img-top"
              alt="Day Scheduler"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Day Scheduler</h5>
              <p className="card-text">Every hour accounted for.</p>
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
