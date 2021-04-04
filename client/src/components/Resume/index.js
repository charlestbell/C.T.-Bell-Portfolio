import React from "react";

function Resume() {
  return (
    <div className="contentContainer p-3 shadow">
      <div className="row">
        <div className="col p-3 ">
          <div className="row">
            <div className="col">
              <div className="d-inline-block hoverBtn">
                <a
                  className="font-weight-bold"
                  href="https://charlestbell.github.io/C.T.-Bell-Portfolio/Assets/CTBell-Resume.pdf"
                  download
                >
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
            Full Stack web developer with a certificate from the UCR Bootcamp. 5
            years of ecommerce experience and 10 years of video marketing
            experience, Fluent in Node, Mongo, Express, React, HTML5, CSS and
            SQL. A life-long learner with a passion for user experience and
            design. Excellent communicator. Highly creative and able to
            understand complex systems. Experience with Agile Development and
            kanban. Known for being adaptable, learning new things quickly and
            over-delivering.
          </p>
          <h6>TECHNICAL SKILLS</h6>
          <ul>
            <li>CODING: Node, Mongo, Express, React, SQL HTML5 and CSS</li>
            <li>TOOLS: GIT, Heroku, Photoshop </li>
          </ul>
          <h6>EXPERIENCE</h6>
          <div className="d-flex justify-content-between">
            <p>Web Admin/Marketer/Content Creator - Employee </p>
            <p>2016-2021</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="font-weight-bold">Blue Ridge Overland Gear </p>
            <p>Lynchburg, VA March 2016 - Present</p>
          </div>

          <ul>
            <li>
              Planned, produced and edited over 300 Youtube across multiple
              brands, one in particular went from 1k subscribers to well over
              20k
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
              brand needs. Quickly became the go-to person for technical needs.
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
        </div>
      </div>
    </div>
  );
}

export default Resume;
