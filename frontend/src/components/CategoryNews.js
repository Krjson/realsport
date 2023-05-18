import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';

const CategoryNews = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await axios.get(`/api/products/category/${category}`);
        const sortedNews = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNews(sortedNews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryNews();
  }, [category]);

  return (
    <div>
      <Row>
        {news.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryNews;
