import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>RealSport</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Корзина
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Профиль</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Выход
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Войти
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Пользователи</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Товары</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Заказы</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {/* Дополнительные элементы меню */}
              <NavDropdown title='Категории' id='categories'>
                <LinkContainer to='/category/tennis'>
                  <NavDropdown.Item>Большой теннис</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/tourism'>
                  <NavDropdown.Item>Туризм, спорт, отдых</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/shoes'>
                  <NavDropdown.Item>Обувь</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/bicycles'>
                  <NavDropdown.Item>Велосипеды</NavDropdown.Item>
                </LinkContainer>
                {/* Дополнительные категории */}
                <LinkContainer to='/category/fitness'>
                  <NavDropdown.Item>Фитнес</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/category/swimming'>
                  <NavDropdown.Item>Плавание</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
