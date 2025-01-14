import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Terms from "./Components/Terms";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default Route opens Register */}
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

