import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4} className="py-3">
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li>Email: info@realsport.com</li>
              <li>Телефон: 88005553535</li>
              <li>Казахстан, г. Алматы, ул. Муканова, 235</li>
            </ul>
          </Col>
          <Col md={4} className="py-3">
            <h5>О нас</h5>
            <p>
              Мы - интернет-магазин Realsport, предлагаем широкий ассортимент спортивных товаров высокого качества.
              Наши продукты помогут вам достичь своих спортивных целей и насладиться активным образом жизни.
            </p>
          </Col>
          <Col md={4} className="py-3">
            <h5>Доставка</h5>
            <p>
              Мы осуществляем доставку по всей стране. Сроки доставки и стоимость могут варьироваться в зависимости от
              региона и выбранного способа доставки.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Realsport. Все права защищены.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
