import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/firebase.png";
import { logOut } from "../auth/firebase";
import { LoginContext } from "../context/LoginContextProvider";

const Navbar = () => {
  const { currentUser } = useContext(LoginContext);

  const handleLogout = () => {
    logOut();
    localStorage.clear();
  };

  return (
    <div className="navbarr">
      <span>
        <Link to="/" className="navbar-brand">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        {currentUser && (
          <span className="text-danger mx-3">
            Hello, {localStorage.getItem("username")}
          </span>
        )}
      </span>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link ">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">
            Gallery
          </Link>
        </li>
        {/*Kullanıcı yoksa register linki gözükecek varsa log out linki gözükecek.*/}
        {!currentUser && (
          <li className="nav-item">
            <Link to="/register" className="nav-link" href="#">
              Register
            </Link>
          </li>
        )}

        {currentUser ? (
          <li className="nav-item">
            <Link to="/login" className="nav-link " onClick={handleLogout}>
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
  );
};

export default Navbar;
