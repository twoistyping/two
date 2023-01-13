import "./styles/app.scss"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Social from "./components/Social"

import Home from "./pages/Home"
import Artwork from "./pages/Artwork"
import Commissions from "./pages/Commissions"
import Emotes from "./pages/Emotes"
// import Guide from './pages/Guide'

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/emotes" element={<Emotes />} />
          {/* <Route path="/guide"><Guide /></Route> */}
        </Routes>
      </Router>
      <Social />
    </>
  )
}
