import React from "react";

function Home() {
  return (
    <div id="mainPage" className="">
      <div className="contentContainer mb-4 p-5 shadow">
        <h2 className="ml-1 mb-3 mt-6">About Me</h2>
        <div className="row">
          <div className="col">
            <img
              src="/thumb_ctBell.jpg"
              className="rounded float-left img-fluid  mr-3 shadow-sm"
              alt="A 30 something smiling white guy"
              width="200px"
            ></img>
            <p>
              Full Stack MERN developer focused on marketing, brand development
              and company growth. Give me your toughest challenges with highest
              impact potential and turn me loose. I enjoy working in teams with
              a focus on agile development. If it's not part of mvp, it can
              wait. Decade of marketing, cinematography and graphic design
              experience and a lifelong obsession with technology.
            </p>
            <p>- Charles Thomas Bell</p>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="contentContainer p-4  shadow">
        <div className="row">
          <div className="col main-article text-center">
            <h2 className=" mb-4">Contact</h2>
            <h5 className="text-center mb-3">
              <i
                className="bi bi-envelope mr-1"
                style={{ fontSize: "22px" }}
              ></i>{" "}
              charlestbell@gmail.com
            </h5>
            <h5 className="text-center mb-3">
              <i
                className="bi bi-telephone-fill mr-1"
                style={{ fontSize: "22px" }}
              ></i>{" "}
              (540) 524-0245
            </h5>
            <div className="socialDiv pb-2 shadow">
              <div className="d-flex justify-content-between px-2">
                <a
                  href="https://github.com/charlestbell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <i className="bi bi-github social hoverBtn d-block"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/charles-bell-9b03bb63/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <i className="bi bi-linkedin social hoverBtn d-block ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col lg-4 sm-2"></div>
    </div>
  );
}

export default Home;
