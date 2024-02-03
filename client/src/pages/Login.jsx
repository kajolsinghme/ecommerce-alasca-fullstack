import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(240, 236, 236, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.postimg.cc/wjJcCTf8/magnificent-black-woman-posing-with-peace-sign-studio-portrait-singing-african-lady-wears-yellow-swe.jpg")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 28px;
    font-weight: 600;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    font-size:16px;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    border-radius:12px;
    cursor: pointer;
    margin: 10px auto;
`;

const Link = styled.a`
    margin: 5px auto;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login