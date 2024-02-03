import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Category from '../components/Category';
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
`;

const CategoryList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar />
        <Category/>
        <Newsletter/>
        <Footer/> 
    </Container>
  );
};

export default CategoryList;
