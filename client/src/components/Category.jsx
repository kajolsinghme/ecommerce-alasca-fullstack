import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 25px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background: #d4e9e3;
`;

const Card = styled(Link)`
  width: 290px;
  height: 150px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 25, 167, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  -webkit-box-shadow: -1px 3px 5px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 5px 2px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 3px 5px 2px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  margin: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  margin: 20px;
  text-align:center ;
`;

const Category = () => {
    const [uniqueCategoriesData,setUniqueCategoriesData] = useState([])

    useEffect(()=>{
        const getCategories = async() =>{
            try{
                const res = await axios.get('http://localhost:5000/api/products/find')
                console.log(res.data)
                const uniqueSet = new Set(res.data.flatMap(product => product.categories));
                const uniqueCategoriesData = Array.from(uniqueSet);
                setUniqueCategoriesData(uniqueCategoriesData);
            }
            catch(error){
                console.log(error)
            }
        }
        getCategories()
    },[])
    
    
    console.log(uniqueCategoriesData)
  return (
    <Container>
      {uniqueCategoriesData.map((category, index) => (
        <Card to={`/products/${category}`} key={index}>
          <Title>{category}</Title>
        </Card>
      ))}
    </Container>
  );
};

export default Category;
