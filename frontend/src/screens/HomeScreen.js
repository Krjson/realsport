import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import CategoryNews from '../components/CategoryNews';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
         Вернуться назад
        </Link>
      )}

      {isHomePage && (
        <>
          <h1>Новые товары</h1>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 8)
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
            </Row>
          )}

          <h2>Товары для тенниса</h2>
          <Row>
            {products
              .filter((product) => product.category === 'tennis')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/tennis" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Товары для туризма, спорта и отдыха</h2>
          <Row>
            {products
              .filter((product) => product.category === 'outdoor')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/outdoor" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Товары с обувью</h2>
          <Row>
            {products
              .filter((product) => product.category === 'shoes')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/shoes" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Товары с велосипедами</h2>
          <Row>
            {products
              .filter((product) => product.category === 'bicycles')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/bicycles" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Товары для фитнеса</h2>
          <Row>
            {products
              .filter((product) => product.category === 'fitness')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/fitness" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Товары для плавания</h2>
          <Row>
            {products
              .filter((product) => product.category === 'swimming')
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/category/swimming" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>

          <h2>Другие товары</h2>
          <Row>
            {products
              .filter(
                (product) =>
                  product.category !== 'tennis' &&
                  product.category !== 'tourism' &&
                  product.category !== 'shoes' &&
                  product.category !== 'bicycles' &&
                  product.category !== 'fitness' &&
                  product.category !== 'swimming'
              )
              .slice(0, 8)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <div className="text-center">
            <Link to="/other-products" className="btn btn-primary">
              Посмотреть все товары
            </Link>
          </div>
        </>
      )}

      {!isHomePage && (
        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
