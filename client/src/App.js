import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import CurrentRates from "./pages/CurrentRates";
import CurrencyHistory from "./pages/CurrencyHistory";

function App() {
  return (
    <Router>
      <Navigation />
      <br/>
      <div><center>by Alex B</center></div>
      <Routes>
        <Route path="/" element={<CurrentRates />} />
        <Route path="/history" element={<CurrencyHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
