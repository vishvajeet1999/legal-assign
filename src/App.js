import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import data from "./data.json";
import { useEffect } from "react";
import { assignLawyers } from "./state/lawyersSlice";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import Lawyers from "./pages/Lawyers";
import History from "./pages/History";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(assignLawyers(data));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link style={{marginLeft: "20px"}} to="/" className="navbar-brand">
          Lawyer Appointment Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/companies" className=" nav-link">
                Law Companies
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/history" className=" nav-link">
                Appointment History
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="companies" element={<Companies />}></Route>
        <Route
          exact
          path="companies/:compId/lawyers"
          element={<Lawyers />}
        ></Route>
        <Route exact path="/history" element={<History />}></Route>
      </Routes>
    </>
  );
}

export default App;
