import React from 'react';
import { useSelector } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryList = () => {
  const newsCategories = useSelector((state) => state.news.categories);

  return (
    <NavDropdown title='Categories' id='categories'>
      {newsCategories.map((category) => (
        <LinkContainer to={`/category/${category.id}`} key={category.id}>
          <NavDropdown.Item>{category.name}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
};

export default CategoryList;
