import './styles/app.scss';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from './components/Nav'
import Social from './components/Social'

import Home from './pages/Home'
import Artwork from './pages/Artwork'
import Commissions from './pages/Commissions'
import Emotes from './pages/Emotes'
import Guide from './pages/Guide'

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/artwork"><Artwork /></Route>
          <Route path="/commissions"><Commissions /></Route>
          <Route path="/emotes"><Emotes /></Route>
          {/* <Route path="/guide"><Guide /></Route> */}
        </Switch>
      </Router>
      <Social />
    </>
  );
}
