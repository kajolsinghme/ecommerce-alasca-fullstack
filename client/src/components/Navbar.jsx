import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {mobile} from '../responsive'
import { useSelector } from "react-redux";

const Container = styled.div`
    height: 60px;
    ${mobile({ width: "125px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "6px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" , marginLeft: "0px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "10px"  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "end" })}
`;

const CategoriesButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const ProductsButton = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16, cursor: "pointer" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            Alasca Fashion
          </Logo>
        </Center>
        <Right>
          <CategoriesButton to="/categories" >CATEGORIES</CategoriesButton>
          <ProductsButton to="/products">PRODUCTS</ProductsButton>
          <MenuItem to="/register">REGISTER</MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>
            <MenuItem to="/cart">
              <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar