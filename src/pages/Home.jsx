import React from 'react'

const Home = () => {
  return (
    <div className="container w-75  mt-5">
      <div className="row d-flex justift-content-center">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg"
                className=" "
                alt="butterfly"
              />
            </div>
            <div className="carousel-item" data-bs-interval={4000}>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149__340.jpg"
                className=" "
                alt="bird"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__340.jpg"
                className=""
                alt="bridge"
              />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
  }


 
export default Home