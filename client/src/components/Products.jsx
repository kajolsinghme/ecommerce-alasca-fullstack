import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,sort}) => {
  console.log(cat,sort)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async() =>{
      try{
        let apiUrl = `http://localhost:5000/api/products/find`

        if(cat){
          apiUrl+= `?category=${cat}`
        }

        if(sort === 'asc' || sort === 'desc' || sort === 'newest'){
          apiUrl+= cat ? `&sort=${sort}` : `?sort=${sort}`
        }

        console.log(apiUrl)
        const response = await axios.get(apiUrl)
        
        console.log(response.data)
        setProducts(response.data)
        
      }catch(error){
        console.log(error)
      }
    }
    getProducts()
  },[cat,sort])

  console.log(products)

  return (
    <Container>
        {products.map((item)=>(
            <Product item={item} key={item._id}/>
        ))}
    </Container>
  )
}

export default Products
