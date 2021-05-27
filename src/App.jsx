import './css/app.scss';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav'
import Social from './components/Social'
import Home from './pages/Home'
import Artwork from './pages/Artwork'
import Guide from './pages/Guide'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/artwork"><Artwork /></Route>
          <Route path="/guide"><Guide /></Route>
        </Switch>
      </Router>
      <Social />
    </>
  );
}

export default App;
