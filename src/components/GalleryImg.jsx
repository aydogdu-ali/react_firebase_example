import { useNavigate } from "react-router-dom";

const GalleryImg = ({ data }) => {
  const { largeImageURL, user, id } = data;
  const navigate = useNavigate();

  // detayı tıklanan fotografın id sini alıp detay sayfasına yönlendirdim.
  const detailHandle = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="container card-container">
      <div className="card">
        <img src={largeImageURL} className="card-img fluid" alt={user} />
        <div className="card-body">
          <h5 className="card-title">Username: {user}</h5>

          <button className="btn btn-warning" onClick={detailHandle}>
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
