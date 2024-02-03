import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { addProduct } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: contain;
    //border: 2px solid green;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 500;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-size: 40px;
    font-weight:200;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:2px solid gainsboro;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Quantity = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
      background-color: #f8f4f4;
  }
`;


const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2]
    console.log(id)

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async() => {
            try{
                const res = await axios.get(`http://localhost:5000/api/products/find/${id}`)
                setProduct(res.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getProduct()
    },[id])

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if(quantity>1){
            setQuantity(quantity - 1);
        }
    };

    console.log(product)
    console.log(quantity)

    const handleClickCart = () => {
        dispatch(
            addProduct({...product, quantity,color,size})
        )
    }

    console.log(product)
    console.log(product.color)
    console.log(color,size)
  
    return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color && product.color.map((c,index) => (
                            <FilterColor key={index} color={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                            {product.size && product.size.map((s,index) => (
                                <FilterSizeOption key={index}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <QuantityContainer>
                        <Remove onClick={handleDecrement} style={{cursor:"pointer"}}/>
                        <Quantity>{quantity}</Quantity>
                        <Add onClick={handleIncrement} style={{cursor:"pointer"}}/>
                    </QuantityContainer>
                    <Button onClick={handleClickCart}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
