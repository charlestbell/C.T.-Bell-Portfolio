import React from "react";
import { Link } from "react-router-dom";

const getUrl = () => {
  const currentUrl = window.location.href;
  return currentUrl;
};

function Resume() {
  const buildUrl = () => {
    const currentUrl = getUrl();
    const baseUrl = currentUrl.substring(0, currentUrl.lastIndexOf("#/resume"));
    const downloadUrl = baseUrl + "/CTBell-Resume.pdf";
    return downloadUrl;
  };

  return (
    <div className="contentContainer p-3 shadow">
      <div className="row">
        <div className="col p-3 ">
          <div className="row">
            <div className="col">
              <div className="d-inline-block hoverBtn">
                <a className="font-weight-bold" href={buildUrl()} download>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col px-4 ">
          <p>
            Lynchburg Va, 24502<br></br>(540) 524-0245<br></br>
            charlestbell@gmail.com
          </p>
          <a href="https://github.com/charlestbell">GitHub</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/c-t-bell-9b03bb63/">Linkedin</a>

          <h1>C.T. Bell</h1>
          <h6>SUMMARY</h6>
          <p className="ml-4">
            Highly skilled Full Stack Mobile and Web React Developer with a certificate from the UCR Bootcamp. Offering a strong foundation in web development and a comprehensive skill set acquired over 3 years of JavaScript, Web, and Mobile experience, 6 years of ecommerce expertise, and 11 years of content marketing proficiency. Passionate about enhancing user experience and implementing compelling design elements. Exceptional communication skills and a proven track record of effectively collaborating with cross-functional teams. Well-versed in Agile Development methodologies, Test-Driven Development (TDD), and Kanban practices. Recognized for adaptability and consistently delivering successful outcomes on intricate projects.
          </p>
          <h6>TECHNICAL SKILLS</h6>
          <ul>
            <li>
              CODING: Node, Mongo, Express, React, React Native, SQL, HTML5 and
              CSS
            </li>
            <li>TOOLS:  GIT, Heroku, Firebase, Cosmos DB, Google Cloud Functions, Photoshop </li>
          </ul>
          <h6>EXPERIENCE</h6>
          <div className="d-flex justify-content-between">
            <p>Developer/Content Creator - Employee </p>
            <p>2016-2023</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="font-weight-bold">Blue Ridge Overland Gear </p>
            <p>Lynchburg, VA March 2016 - Present</p>
          </div>

          <ul>
            <li>
              In the last 2 years I developed a mobile app from the ground up as a solo developer.
              <br></br>
              <br></br>
            </li>
            <li>
              Helped to craft the brand identity, developing messaging,
              strategies and marketing materials and helped take the company
              from 6 employees to 16 and triple it’s sales.
              <br></br>
              <br></br>
            </li>
            <li>
              Helped facilitate a successful website replatforming. Worked on
              database transfer, content audit and implementation for various
              brand needs.
            </li>
          </ul>
          <div className="d-flex justify-content-between">
            <p className="font-weight-bold">Freelance Film Crew</p>
            <p>Nov 2020 - April 2021</p>
          </div>
          <ul>
            <li>
              Worked on content and marketing for countless brands and several
              award winning film projects.
              <br></br>
              <br></br>
            </li>
          </ul>
          <h6>EDUCATION</h6>
          <div className="d-flex justify-content-between">
            <p>Full Stack Web Development Certificate UCR </p>
            <p className="ml-1">Nov 2020 - April 2021</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Udemy Course - Master Git and GitHub - Beginner to Expert</p>
            <p className="ml-1">May 2021</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Testing React with Jest and Testing Library</p>
            <p className="ml-1">Sep 2021</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>React Native - The Practical Guide [2021 Edition]</p>
            <p className="ml-1">Sep 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
