import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const CategoryNews = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await axios.get(`/api/products/category/${category}`);
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryNews();
  }, [category]);

  return (
    <div className="row">
      {news.map((item) => (
        <div key={item._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="my-3 p-3 rounded card">
            <Link to={`/product/${item._id}`}>
              <img className="card-img-top" src={item.image} alt={item.title} />
            </Link>
            <div className="card-body">
              <Link to={`/product/${item._id}`}>
                <div className="card-title">
                  <strong>{item.title}</strong>
                </div>
              </Link>
              <div className="card-text">
                <div className="rating">
                  <span>
                    <i className="far fa-star" style={{ color: 'rgb(248, 232, 37)' }}></i>
                  </span>
                  <span>
                    <i className="far fa-star" style={{ color: 'rgb(248, 232, 37)' }}></i>
                  </span>
                  <span>
                    <i className="far fa-star" style={{ color: 'rgb(248, 232, 37)' }}></i>
                  </span>
                  <span>
                    <i className="far fa-star" style={{ color: 'rgb(248, 232, 37)' }}></i>
                  </span>
                  <span>
                    <i className="far fa-star" style={{ color: 'rgb(248, 232, 37)' }}></i>
                  </span>
                  <span>0 reviews</span>
                </div>
              </div>
              <h3 className="card-text">{item.price} Тг.</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNews;
