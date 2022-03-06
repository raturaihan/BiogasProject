import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  } from "react-router-dom";

import Graphic from "./Pages/Graphic/Graphic";
import Logdata from "./Pages/LogData/Logdata";
import Info from "./Pages/Info/info";
import Login from "./Pages/Login/login";
import "./App.css";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("dev_id");
  return isAuthenticated ? children : < Navigate to="/" />
}

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("dev_id");
  return isAuthenticated ?  < Navigate to="/graphic" /> : children
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PublicRoute><Login /></PublicRoute>}/>
        <Route exact path="/info" element={<Info />}/>
        <Route exact path="/graphic" element={<PrivateRoute><Graphic /></PrivateRoute>}/>
        <Route exact path="/logdata" element={<PrivateRoute><Logdata /></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;

