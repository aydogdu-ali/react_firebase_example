import React from 'react'
import { useNavigate } from 'react-router-dom';

const GalleryImg = ({data}) => {
  const { largeImageURL, user,  id } = data;
  const navigate = useNavigate();

  console.log(data)

  // detayı tıklanan fotografın id sini alıp detay sayfasına yönlendirdim.
  const detailHandle = () => {
        navigate(`/detail/${id}`);
   
  };

  return (
    <div className="container card-container">
      <div class="card ">
        <img src={largeImageURL} className="card-img fluid" alt= {user}/>
        <div class="card-body">
          <h5 class="card-title">Name: {user}</h5>

          <button  className="btn btn-warning" onClick={detailHandle}>
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryImg

