import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
`;

const LeftPane = styled.div`
  flex: 0.6;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  font-family: 'Roboto', sans-serif;
`;

const RightPane = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-style: normal;
`;

const Heading3 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-style: normal;
`;

const Heading2 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-weight: bold;
  font-style: normal;
  font-size: 2rem;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-style: italic;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #ff7e5f;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #ff7e5f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #feb47b;
  }
`;


const OrDivider = styled.div`
  margin: 1rem;
  font-size: 1.25rem;
  color: #777;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
`;


const Footer = styled.div`
  font-size: 1.25rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ff7e5f;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const PasswordInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #ff7e5f;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;



const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [validationError, setValidationError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setValidationError(null);

    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        setValidationError('Enter valid credentials');
      } else {
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem('userEmail', credentials.email);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      setValidationError('An error occurred. Please try again later.');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Container>
      <LeftPane>
        <Heading>Your One-Stop Rental Marketplace.</Heading>
        <SubHeading>Simplify your life by renting anything you need, all in one place, with ease, security, convenience, and affordable rates, connecting you with trusted providers for a seamless experience.</SubHeading>
        <Image src="../imagee.png" alt="Illustration" />
      </LeftPane>
      <RightPane>
        <Logo>
          <LogoImage src="../ecomlogo.png" alt="Logo" />
          <Heading3>RentEase</Heading3>
        </Logo>
        <Heading2>Welcome Back!</Heading2>
        <OrDivider>Please login to your account</OrDivider>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email address"
            name="email"
            value={credentials.email}
            onChange={onChange}
            error={errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <PasswordWrapper>
            <PasswordInput
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              error={errors.password}
            />
            <ToggleButton type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? "Hide" : "Show"}
            </ToggleButton>
          </PasswordWrapper>
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          {validationError && <ErrorMessage>{validationError}</ErrorMessage>}
          <Button type="submit">Login</Button>
        </Form>
        <Footer>
          Don't have an account? <StyledLink to="/createuser">Signup</StyledLink>
        </Footer>
      </RightPane>
    </Container>
  );
};

export default Login;