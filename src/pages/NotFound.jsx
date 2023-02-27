import React from 'react'
import NotFoundPic from "../assets/NotFound.jpg"
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='d-flex flex-column align-items-center  '>
      <img className="w-50 mt-3 mb-5 " src={NotFoundPic} alt="notFound" />
      <button  className="btn btn-warning mb-2 w-25"
      onClick={()=>navigate(-1)}>Back to search</button>
    </div>
  );
}

export default NotFound