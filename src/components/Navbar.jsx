import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/firebase.png"
import { logOut } from '../auth/firebase';
import {LoginContext} from "../context/LoginContextProvider"

const Navbar = () => {
 const { currentUser } = useContext(LoginContext);
 console.log(currentUser?.displayName)

  return (
    <div>
      <div className="container d-flex justify-content-around align-items-center mt-5 mx-auto  rounded dark">
        <span>
          <Link to="/" className="navbar-brand">
            <img className="logo" src={Logo} alt="logo" />
          </Link>
          <span style={{color:"red"}}>
            {currentUser && (
              <span className="mx-3 word-spacing">
                {" "}
                Hello, {currentUser?.displayName}
              </span>
            )}
          </span>
        </span>

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/" className="nav-link " >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          { !currentUser &&(<li className="nav-item">
            <Link to="/register" className="nav-link" href="#">
              Register
            </Link>
          </li>)}

          {currentUser ? (
            <li className="nav-item">
              <Link to="/login" className="nav-link " 
              onClick = {logOut}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link ">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar