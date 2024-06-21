import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" href="#">
            Culinaries
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-0 ms-md-3">
                <Link to='/profile' className="nav-link" aria-current="page" href="#">
                  Profile
                </Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <Link to='/register' className="nav-link" aria-current="page" href="#">
                  Register
                </Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
                <Link to='/login' className="nav-link" aria-current="page" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
