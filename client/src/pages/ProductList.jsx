import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
`;

const Title = styled.div`
  margin: 20px;
  font-size:30px;
  font-weight:600;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const decodedStringcat = cat ? decodeURIComponent(cat.replace(/\\'/g, "'")) : null;

  const [sort,setSort] = useState("Newest")

  console.log(sort)

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>{cat ? decodedStringcat : "All Products"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat}  sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList