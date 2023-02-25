import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from "../pages/Home"
import Login from '../pages/Home';
import Register from '../pages/Register';
import Gallery from "../pages/Gallery"
import Detail from "../pages/Detail"
import NotFound from '../pages/NotFound';
import Footer from "../components/Footer"
import PrivateRouter from "../router/PrivateRouter"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/firebase_react_movie_app" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default AppRouter