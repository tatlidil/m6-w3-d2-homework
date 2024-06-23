import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <h2>TV APPS</h2>
        <ul>
          <li>
            <Link to="/Netflix">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" />
            </Link>
          </li>
          <li>
            <Link to="/HBO_Max">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" />
            </Link>
          </li>
          <li>
            <Link to="/Hulu">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfbC4FQw6QqY5TWBMVF2qEtSFe1D-b4k5Rw&s" alt="Hulu" />
            </Link>
          </li>
          <li>
            <Link to="/Prime_Video">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" />
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}
