import "./App.css";
import EBooks from "./components/EBooks/EBooks";
import EBookDetails from "./components/EBookDetails/EBookDetails";
import Footer from "./sharedComponents/footer/Footer";
import HeaderWrapper from "./sharedComponents/header/HeaderWrapper";
import NavBar from "./sharedComponents/navBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderWrapper />
      <NavBar />
      <Routes>
        <Route path="/" element={<EBooks />} />
        <Route path="/book/:id" element={<EBookDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
