import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContextProvider";
import Loading from "../assets/loading.gif"
import Detail from "./Detail";
import NODATA from "../assets/NODATA.png"
import Pagination from "../components/Pagination";

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
  const url = `https://pixabay.com/api/?key=${api}&image_type=photo&lang=tr`;
  //!----------------------------------------
  const searchAPI = `https://pixabay.com/api/?key=${api}&image_type=photo&lang=tr&q=`;

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
    <div className="gallery">
      {loading ? (
        <div className="loading-gif">
          <img src={Loading} alt="loading" />
        </div>
      ) : (
        <div className="row gallery-row">
          <form onSubmit={handleSubmit}>
            <div className="gallery-form">
              <input
                className="form-control"
                placeholder="Car, Flower, Winter..."
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <i
                onClick={handleSubmit}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
          </form>

          <div>
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
              handleClick={handleClick}
            />
          </div>
          {sonuc && (
            <div
              className={
                !loading && show.length === 0
                  ? "d-none"
                  : "text-center text-uppercase"
              }
            >
              images related to{" "}
              <span style={{ color: "#006a6ac0", fontWeight: "bold" }}>
                "{sonuc}"
              </span>
            </div>
          )}

          {!loading && show.length === 0 && (
            <img className="nodata-img" src={NODATA} alt="nodata" />
          )}
          {selectedData.map((data) => {
            return <Detail key={data.id} data={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
