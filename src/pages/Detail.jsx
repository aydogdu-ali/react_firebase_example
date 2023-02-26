import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import loading from "../assets/loading.gif"

const Detail = () => {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 
 


  const api_key = "31725179-e9547203f59a4095ebc0c6c08";

  const url = `https://pixabay.com/api/?key=${api_key}&image_type=photo&lang=en&id=${id}`;

const getFetchData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setImage(data.hits);
      setLoading(false);
    })
    .catch((error) => console.log(error));
};

useEffect(() => {
  getFetchData();
}, []);



  return (
    <div className="   mt-4">
      {loading && (
        <div>
          <img src={loading} alt="loading" />
        </div>
      )}
      <>
        <Link to="/gallery">
          <button className="btn btn-warning mb-2">Back to search</button>
        </Link>
        <br />
        <div className="image-url">
          <img src={image[0]?.largeImageURL} alt="detail" />
        </div>
        <div className="mt-2 p-3 bg-dark w-75 mx-auto rounded rounded-5">
          <div className="row w-50 mx-auto">
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">Tags</h6>
              <p className="text-success">{image[0]?.tags}</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">Size</h6>
              <p className="text-success">
                {image[0]?.webformatHeight} x {image[0]?.webformatWidth}
              </p>
            </div>
          </div>

          <div className="row w-50 mx-auto align-items-center-justify-content-evenly text-center ">
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">Like</h6>
              <p className="text-success"> {image[0]?.likes} </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">Comment</h6>
              <p className="text-success"> {image[0]?.comments} </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">View</h6>
              <p className="text-success"> {image[0]?.views} </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <h6 className="detail-title text-danger fw-bolder">Download</h6>
              <p className="text-success"> {image[0]?.downloads} </p>
            </div>
          </div>
        </div>
      </>
      <Link to="/gallery">
        <button className="btn btn-warning m-2">Back to search</button>
      </Link>
    </div>
  );
};

export default Detail;
