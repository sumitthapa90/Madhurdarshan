import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Rooms from "./pages/Rooms/Rooms";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div className="app">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/rooms" element={<Rooms />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
