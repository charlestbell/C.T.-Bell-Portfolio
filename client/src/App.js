import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
// <Router basename={process.env.PUBLIC_URL + "/"}>
function App() {
  return (
    <Router basename="/">
      <div>
        <main className="container mb-3">
          {/* Navigation */}
          <div className="row g-0" id="navigation">
            <Nav />
            <div className="col-md-9 mt-4 ps-md-3">
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
        <p className="text-center white-text">
          © {/\d{4}/.exec(Date())[0]} C.T. Bell
        </p>
      </div>
    </Router>
  )
}

export default App
