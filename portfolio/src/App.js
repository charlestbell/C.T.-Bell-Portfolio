import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // mainPage = document.querySelector("#mainPage");
  // portfolioPage = document.querySelector("#portfolioPage");
  // resumePage = document.querySelector("#resumePage");
  // navigation = document.querySelector("#navigation");

  // navigation.addEventListener("click", (event) => {
  //   switch (event.target.id) {
  //     case "resumeBtn":
  //       console.log("resume button");
  //       mainPage.setAttribute("class", "d-none");
  //       portfolioPage.setAttribute("class", "d-none");
  //       resumePage.classList.remove("d-none");
  //       break;
  //     case "portfolioBtn":
  //       console.log("portfolio button");
  //       mainPage.setAttribute("class", "d-none");
  //       resumePage.setAttribute("class", "d-none");
  //       portfolioPage.classList.remove("d-none");
  //       break;
  //     default:
  //       break;
  //   }
  // });

  return (
    <div>
      <main className="container mb-3">
        {/* Navigation */}
        <div className="row" id="navigation">
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
                Portfolio
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

          <div className="col-md-9 mt-4">
            {/* Main Page */}
            <div id="mainPage" className="">
              <div className="contentContainer mb-4 p-5 shadow">
                <h2 className="ml-1 mb-3 mt-6">About Me</h2>
                <div className="row">
                  <div className="col">
                    <img
                      src="Assets/thumb_ctBell.jpg"
                      className="rounded float-left img-fluid  mr-3 shadow-sm"
                      alt="A 30 somthing smiling white guy"
                      width="200px"
                    ></img>
                    <p>
                      Full Stack MERN developer focused on marketing, brand
                      development and company growth. Give me your toughest
                      challenges with highest impact potential and turn me
                      loose. I enjoy working in teams with a focus on agile
                      development. If it's not part of mvp, it can wait. Decade
                      of marketing, cinematography and graphic design experience
                      and a lifelong obsession with technology.
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
            {/* Portfolio Page */}
            <div id="portfolioPage" className="d-none">
              <div className="contentContainer">
                <div className="row">
                  <div className="col p-3 ">
                    <h2 className="ml-4 mb-3 mt-6">Portfolio</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col p-4 d-flex flex-wrap justify-content-around">
                    <div className="card mb-4" style={{ width: "23rem" }}>
                      <img
                        src="Assets/dabblr.jpg"
                        className="card-img-top"
                        alt="ctyFaktz"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Dabblr - The best tutorials in the world has to offer
                        </h5>
                        <p className="card-text">
                          A social education platform that aggregates the best
                          tutorials on every topic.
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
                        src="Assets/ctyFaktz.jpg"
                        className="card-img-top"
                        alt="ctyFaktz"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          ctyFaktz - City Research made fun!
                        </h5>
                        <p className="card-text">
                          Find out fun facts about cities, compare cities
                          together and have fun.
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
                        src="Assets/Weather Dashboard.jpg"
                        className="card-img-top"
                        alt="Weather Dashboard"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">
                          Beautiful Weather Dashboard
                        </h5>
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

                    <div className="card mb-4" style={{ width: "23rem" }} z>
                      <img
                        src="Assets/Day Scheduler.jpg"
                        className="card-img-top"
                        alt="Day Scheduler"
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
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
            </div>
            {/* Resume Page */}
            <div id="resumePage" className="d-none p-3">
              <div className="contentContainer p-3">
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
                    <br></br>
                    <br></br>
                    <a href="https://www.linkedin.com/in/c-t-bell-9b03bb63/">
                      Linkedin
                    </a>

                    <h1>C.T. Bell</h1>
                    <h6>SUMMARY</h6>
                    <p className="ml-4">
                      Full Stack web developer with a certificate from the UCR
                      Bootcamp. 5 years of ecommerce experience and 10 years of
                      video marketing experience, Fluent in Node, Mongo,
                      Express, React, HTML5, CSS and SQL. A life-long learner
                      with a passion for user experience and design. Excellent
                      communicator. Highly creative and able to understand
                      complex systems. Experience with Agile Development and
                      kanban. Known for being adaptable, learning new things
                      quickly and over-delivering.
                    </p>
                    <h6>TECHNICAL SKILLS</h6>
                    <ul>
                      <li>
                        CODING: Node, Mongo, Express, React, SQL HTML5 and CSS
                      </li>
                      <li>TOOLS: GIT, Heroku, Photoshop </li>
                    </ul>
                    <h6>EXPERIENCE</h6>
                    <div className="d-flex justify-content-between">
                      <p>Web Admin/Marketer/Content Creator - Employee </p>
                      <p>2016-2021</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="font-weight-bold">
                        Blue Ridge Overland Gear{" "}
                      </p>
                      <p>Lynchburg, VA March 2016 - Present</p>
                    </div>

                    <ul>
                      <li>
                        Planned, produced and edited over 300 Youtube across
                        multiple brands, one in particular went from 1k
                        subscribers to well over 20k
                        <br></br>
                        <br></br>
                      </li>
                      <li>
                        Helped to craft the brand identity, developing
                        messaging, strategies and marketing materials and helped
                        take the company from 6 employees to 16 and triple it’s
                        sales.
                        <br></br>
                        <br></br>
                      </li>
                      <li>
                        Helped facilitate a successful website replatforming.
                        Worked on database transfer, content audit and
                        implementation for various brand needs. Quickly became
                        the go-to person for technical needs.
                      </li>
                    </ul>
                    <ul>
                      <div className="d-flex justify-content-between">
                        <p className="font-weight-bold">Freelance Film Crew</p>
                        <p>Nov 2020 - April 2021</p>
                      </div>
                      <li>
                        Worked on content and marketing for countless brands and
                        several award winning film projects.
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
            </div>
          </div>
        </div>
      </main>
      <p className="text-center white-text">© 2021 C.T. Bell</p>
    </div>
  );
}

export default App;
