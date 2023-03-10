import { useContext, useState } from "react";

import { register } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import { toastSuccessNotify } from "../assets/ToastNotify";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = firstName[0].toUpperCase() + firstName.substring(1);
    const user = await register(email, password, displayName);

    if (user) {
      setCurrentUser(true);
      localStorage.setItem("username", user?.displayName);
      navigate("/gallery");
      toastSuccessNotify(`Welcome ${user?.displayName}`);
    } else {
      setCurrentUser(false);
    }
  };

  return (
    <div className=" register container bg-light bg-gradient rounded mt-5 p-4 shadow p-3 mb-5 bg-body rounded">
      <form
        className="container W-50 bg-info text-dark rounded mt-5 mb-5 mx-auto p-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-danger mb-5 ">Register Form</h2>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control  "
            id="#floatingInput"
            placeholder="Adınızı Giriniz"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="#floatingInput">Enter Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control  "
            id="floatingInput"
            placeholder="Mail Adresini Giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput"> Enter e-mail </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control "
            id="floatingPassword"
            placeholder="şifrenizi Giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Enter password</label>
        </div>
        <button
          className="btn btn-warning mt-5 w-25"
          disabled={!email || !password || !firstName}
          type="submit"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Register;
