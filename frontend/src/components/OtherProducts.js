import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OtherProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOtherProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
          <div className="my-3 p-3 rounded card">
            <Link to={`/product/${product._id}`}>
              <img className="card-img-top" src={product.image} alt={product.name} />
            </Link>
            <div className="card-body">
              <Link to={`/product/${product._id}`}>
                <div className="card-title">
                  <strong>{product.name}</strong>
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
              <h3 className="card-text">${product.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherProducts;
