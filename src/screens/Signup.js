import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  });

  const navigate = useNavigate();

  const [validationError, setValidationError] = useState(null);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.name || !credentials.email || !credentials.password || !credentials.location) {
      setValidationError("Please fill in all fields.");
      return;
    }

    if (!validatePassword(credentials.password)) {
      setValidationError("Password must be at least 6 characters long, with at least one number, one uppercase letter, and one special character.");

      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const json = await response.json();

      if (!json.success) {
        setValidationError("Failed to create account. Please check your credentials and try again.");
      } else {
        navigate('/login')

      }
    } catch (error) {
      setValidationError("An error occurred. Please try again later.");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <RightPane>
        <Title>Create your RentEase Account</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              placeholder="Enter your first and last name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              id="name"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="name">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="email"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              placeholder="Minimum 6 characters with a number and a letter"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="password"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Location</Label>
            <Input
              type="text"
              placeholder="Enter your Location"
              name="location"
              value={credentials.location}
              onChange={onChange}
              id="location"
            />
          </InputContainer>

          {validationError && <div style={{ color: 'red', marginBottom: '1rem' }}>{validationError}</div>}
          <Button type="submit">SIGN UP</Button>
        </Form>
        <Footer>
          Already a member? <StyledLink to="/login">Login here</StyledLink>
        </Footer>
      </RightPane>
    </Container>
  );
};

export default Signup;




const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
  }
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

  @media (max-width: 768px) {
    flex: 1;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: none;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const Label = styled.label`
  margin-bottom: 0.2rem;
  color: #333;
  font-size: 1.25rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: border-color 0.3s ease;
  font-family: 'Roboto', sans-serif;

  &:focus {
    border-color: #ff7e5f;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  background: white;
  margin-top: 1rem;
  margin-bottom: 2rem;

  &:focus {
    border-color: #ff7e5f;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #ff7e5f;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;

  &:hover {
    background-color: #feb47b;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const OrDivider = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  color: #777;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;

const StyledGoogleLoginButton = styled(GoogleLoginButton)`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px !important;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const StyledFacebookLoginButton = styled(FacebookLoginButton)`
  width: 100%;
  border-radius: 10px !important;
`;

const Footer = styled.div`
  font-size: 0.9rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: #ff7e5f;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const BirthdayTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.2rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;