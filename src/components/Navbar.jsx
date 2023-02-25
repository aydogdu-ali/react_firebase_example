import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center mt-5 mx-auto ">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" href="#">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link ">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar