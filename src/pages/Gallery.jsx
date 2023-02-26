import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import Loading from "../assets/loading.gif"
import NODATA from "../assets/NODATA.png"
import Pagination from "../components/Pagination";
import GalleryImg from "../components/GalleryImg";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleClick = (num) => {
    setPage(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText && !currentUser) {
        navigate("/login");
    } else if (!searchText) {
      ;
    } else {
      getAPI(searchAPI + searchText);
      setSearchText("");
      setSonuc(searchText);
      setPage(1);
    }
  };

  return (
    <div className="gallery mt-3 mx-auto">
      {loading ? (
        <div className="loading-gif">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <div className=" m-2 mx-auto">
          <form className="mt-1 mb-1 mx-auto" onSubmit={handleSubmit}>
            <div className="w-25 m-2 mx-auto">
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
              className={
                !loading && show.length === 0
                  ? "d-none mt-3 mb-1"
                  : "text-center text-uppercase mt-3 mb-1"
              }
            >
              Search results{" "}
              <span style={{ color: "#006a6ac0", fontWeight: "bold" }}>
                "{sonuc}"
              </span>
            </div>
          )}
          {!loading && show.length === 0 && (
            <img className="nodata-img" src={NODATA} alt="nodata" />
          )}
          <div className="row  d-flex justify-content-center ">
            {selectedData.map((data, id) => {
              return (
                <div  key = {id} className=" g-5 col-12 col-sm-6 col-md-4 col-lg-3 ">
                  <GalleryImg  data={data} />
                </div>
              )
            })}
          </div>
          
        </div>
      )}
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Gallery;
