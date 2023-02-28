const Home = () => {
  return (
    <div className="container mt-5 mb-5">
      <h3 style={{ color: "red" }}>Welcome to Photo Search Website</h3>
      <p className="text-primary h-6 fw-bolder">
        Register then start to search
      </p>
      <div className="row d-flex justift-content-center">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mb-5">
            <div className="carousel-item active" data-bs-interval={6000}>
              <img
                src="https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666__340.jpg"
                alt="butterfly"
              />
            </div>
            <div className="carousel-item" data-bs-interval={3000}>
              <img
                src="https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149__340.jpg"
                alt="bird"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769__340.jpg"
                alt="bridge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
