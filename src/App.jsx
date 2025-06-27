import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Prudencia from "./pages/Prudencia";
import Foucault from "./pages/Foucault";
import Mal from "./pages/Mal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prudencia" element={<Prudencia />} />
        <Route path="/foucault" element={<Foucault />} />
        <Route path="/mal" element={<Mal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
