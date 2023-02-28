import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import Loading from "../assets/loading.gif";
import NODATA from "../assets/NODATA.png";
import Pagination from "../components/Pagination";
import GalleryImg from "../components/GalleryImg";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sonuc, setSonuc] = useState("");
  const { currentUser } = useContext(LoginContext);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = 4;
  const startIndex = (page - 1) * 6;
  const selectedData = show.slice(startIndex, startIndex + 6);

  // const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY

  const api = "31725179-e9547203f59a4095ebc0c6c08";
  const url = `https://pixabay.com/api/?key=${api}&image_type=photo&lang=en`;
  //!----------------------------------------
  const searchAPI = `https://pixabay.com/api/?key=${api}&image_type=photo&lang=en&q=`;

  const getAPI = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setShow(data.hits);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAPI(url);
  }, [url]);

  // pagination'a gönderilen parametre
  const handleClick = (num) => {
    setPage(num);
  };

  // Api den veri çekme fonksiyonu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText && !currentUser) {
      navigate("/login");
    } else if (!searchText) {
    } else {
      getAPI(searchAPI + searchText);
      setSearchText("");
      setSonuc(searchText);
      setPage(1);
    }
  };

  return (
    <div className="container gallery mt-3 mb-5">
      {loading ? (
        <div className="loading-gif">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <div className=" m-2 mx-auto">
          <form className="mt-1 mb-1 mx-auto" onSubmit={handleSubmit}>
            <div className="gallery-input w-25 mx-auto">
              <input
                className="form-control "
                placeholder="Car, Flower, Winter..."
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </form>
          {sonuc && (
            <div
              /*gelen veri yoksa sonuç yazısını gösterme */
              className={
                !loading && show.length === 0
                  ? "d-none mt-3 mb-1"
                  : "text-center text-uppercase mt-3 mb-1"
              }
            >
              Search results
              <span className="text-primary fw-bold">"{sonuc}"</span>
            </div>
          )}
          {/*gelen veri yoksa loadin false aranan kelime ile ilgili resim bulunmadığı gösterir.*/}
          {show && !loading && show.length === 0 && (
            <img className="nodata-img" src={NODATA} alt="nodata" />
          )}
          <div className="row  d-flex justify-content-center ">
            {selectedData.map((data, id) => {
              return (
                <div key={id} className="g-5 col-sm-12 col-md-6 col-xl-4">
                  <GalleryImg data={data} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="mb-5">
        {/*arama sınucu 6 dan büyükse pagination gözükür.*/}
        {show.length > 6 && (
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
