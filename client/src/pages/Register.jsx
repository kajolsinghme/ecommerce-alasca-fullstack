import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { register, STATUSES } from '../redux/slices/authSlice';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
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
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 16px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    border-radius:12px;
    cursor: pointer;
    margin: 0px auto;
    font-size: 18px;
`;

const Register = () => {
    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.auth.status)
    console.log(authStatus)

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData))

    }

    console.log(formData)

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
                <Input id="name" name='name' type='text' placeholder="name" value={formData.name} onChange={handleChange} />

                <Input id="lastName" name='lastName' type='text' placeholder="last name" value={formData.lastName} onChange={handleChange} />

                <Input id="username" name='username' type='text' placeholder="username" value={formData.username} onChange={handleChange} />

                <Input id="email" name='email' type='email' placeholder="email" value={formData.email} onChange={handleChange} />

                <Input id="password" name='password' type='password' placeholder="password" value={formData.password} onChange={handleChange} />

                <Input id="confirmPassword" name='confirmPassword' type='password' placeholder="confirm password" value={formData.confirmPassword} onChange={handleChange} />

                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button type='submit' disabled={authStatus === 'loading' } >CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register