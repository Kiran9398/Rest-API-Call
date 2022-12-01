import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.js";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="product-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <div>
            <img src={item.image} alt="#" />
          </div>
          <div className="card-description">
            <h6>{item.title}</h6>
            <h6>{`Ratings: ${item.rating.rate}`}</h6>
            <h6>{`category: ${item.category}`}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
