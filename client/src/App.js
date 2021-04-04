import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

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
    <Router>
      <div>
        <main className="container mb-3">
          {/* Navigation */}
          <div className="row" id="navigation">
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
            <div className="col-md-9 mt-4">
              <Switch>
                <Route exact path="/">
                  {/* Main Page */}
                  <Home />
                </Route>
                <Route path="/portfolio">
                  {/* Portfolio Page */}
                  <Portfolio />
                </Route>
                <Route path="/resume">
                  {/* Resume Page */}
                  <Resume />
                </Route>
              </Switch>
            </div>
          </div>
        </main>
        <p className="text-center white-text">© 2021 C.T. Bell</p>
      </div>
    </Router>
  );
}

export default App;
