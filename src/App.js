
import AboutPage from "./pages/AboutPage"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact> <Home /> </Route>     
        <Route path="/about"> <AboutPage /> </Route>     
        <Route path="/Contact-me"> <Contact /> </Route>     
        <Route path="/projects"> <ProjectsPage /> </Route>     
      </Switch>
      </Router>
    </div>
  );
}

export default App;
