import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
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
        </Routes>
      </div>
    </Router>
  );
}

