import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-light mt-5 mb-0">
      <footer className="py-2 my-0 ">
        <ul className="nav justify-content-center border-bottom pb-1 mb-1 ">
          <li className="nav-item  rounded mx-3">
            <Link to="/" className="nav-link px-2 text-dark fw-bold">
              Home
            </Link>
          </li>
          <li className="nav-item  link-footer  rounded mx-3">
            <Link to="/gallery" className="nav-link px-2 text-dark fw-bold ">
              Gallery
            </Link>{" "}
          </li>
          <li className="nav-item   rounded mx-3">
            <Link to="/register" className="nav-link px-2 text-dark fw-bold">
              Register
            </Link>{" "}
          </li>
          <li className="nav-item link-footer  rounded mx-3">
            <Link to="/login" className="nav-link px-2 text-dark fw-bold ">
              Login
            </Link>{" "}
          </li>
        </ul>
        <p className="text-center ">
          © {new Date().getFullYear()} Company, Inc
        </p>
      </footer>
    </div>
  );
  }


export default Footer