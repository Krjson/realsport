import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from './Product'; // Make sure to import the Product component correctly


const OtherProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOtherProducts = async () => {
      try {
        const response = await axios.get('/api/products/category/other');
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProducts(sortedProducts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOtherProducts();
  }, []);

  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OtherProducts;
