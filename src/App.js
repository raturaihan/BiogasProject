import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

import Graphic from "./Pages/Graphic/Graphic";
import Logdata from "./Pages/LogData/Logdata";
import Signup from "./Pages/Signup/signup";
import Login from "./Pages/Login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/graphic" element={<Graphic />}/>
        <Route exact path="/logdata" element={<Logdata />}/>
      </Routes>
    </Router>
  );
}

export default App;

