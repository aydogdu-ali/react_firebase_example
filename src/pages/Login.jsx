import React, { useState } from 'react'

import { UserLogin } from "../auth/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit= async(e)=>{
  e.preventDefault()
  
   const user = await UserLogin(email, password, navigate);

 console.log(user)
}

  return (
    <div className=" register container bg-light bg-gradient rounded mt-5 p-4 shadow p-3 mb-5 bg-body rounded">
      <form
        className="container W-50 bg-info text-dark rounded mt-5 mb-5 mx-auto p-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-danger mb-5 "> Welcome</h2>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control "
            id="floatingInput"
            placeholder="Mail Adresini Giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter e-mail </label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="şifrenizi Giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Enter password</label>
        </div>
        <button
          className="btn btn-warning mt-5 w-25"
          disabled={!email || !password}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
  }



      
   


export default Login

