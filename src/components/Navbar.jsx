import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/firebase.png"
import {LoginContext} from "../context/LoginContextProvider"

const Navbar = () => {
 const { currentUser } = useContext(LoginContext);
 console.log(currentUser?.displayName)

  return (
    <div>
      <div className="container d-flex justify-content-around align-items-center mt-5 mx-auto ">
        <span>
          <Link to="/" className="navbar-brand">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <span> 
            {currentUser && <span className='mx-3 word-spacing'> Merhaba,     {currentUser?.displayName}
          
          </span>}
          
          </span>
        </span>

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