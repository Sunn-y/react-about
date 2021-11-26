
import "./scss/styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Tree from "./assets/img/tree.png";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <img src={Tree} alt="tree.png" className="main-img"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
