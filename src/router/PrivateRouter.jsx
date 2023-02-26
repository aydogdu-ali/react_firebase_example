import React, { useContext } from 'react'
import Login from '../pages/Login'
import { Outlet } from 'react-router-dom';
import  { LoginContext } from "../context/LoginContextProvider";


const PrivateRouter = () => {
   const { currentUser } = useContext(LoginContext);
  return (
    currentUser ? <Outlet /> : <Login />
  )
}

export default PrivateRouter