import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Navbar from '../components/Navbar';

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  &:hover {
    animation-iteration-count: infinite;
  }
`;

const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 1rem;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
`;

const Slogan = styled.div`
  padding: 0 2rem;
  animation: ${slideInFromLeft} 1s ease-in-out forwards;
  z-index: 1;
`;

const MainHeading = styled.h1`
  font-size: 6rem; /* Adjusted size for better layout */
  font-weight: 900;
  margin-bottom: 0rem;
  color: white;
`;

const SubHeading = styled.div`
  font-size: 2rem; /* Adjusted size for better layout */
  font-weight: 500;
  color: white;
`;

const BackgroundImage = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: url('/businesspeople.jpg'); /* Correct path to the public folder */
  background-size: cover;
  background-position: center;
  z-index: 0;
  clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0 100%);
  @media (max-width: 768px) {
    width: 100%;
    clip-path: none;
  }
`;

const ContentContainer = styled.div`
  padding: 5rem 2rem;
  background: #ffe0b2; /* Background color for content container */
`;

const ScrollableContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div`
  flex: 1;
  margin: 2rem;
  min-width: 300px;

  h2 {
    font-size: 4rem; 
    color: orange;
    margin-bottom: 1rem;
    font-family: 'Roboto', sans-serif;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 1s ease, transform 1s ease;


    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  p {
    font-size: 1.5rem; /* Increased font size */
    color: black;
    font-family: 'Roboto', sans-serif;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 1s ease, transform 1s ease;

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const VideoWrapper = styled.div`
  width: 50%; /* Adjusted width */
  max-width: 100%;
  margin-right: 2rem; /* Add margin to right for spacing */
`;

const CategoriesContainer = styled.div`
  padding: 5rem 2rem;
  background: #fff; /* Background color for categories container */
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 3rem; /* Adjust font size as needed */
  margin-bottom: 1rem;
`;

const SubHeadingCategories = styled.p`
  font-size: 1.5rem; /* Adjust font size as needed */
  margin-bottom: 2rem;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

const Stat = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 2rem;
    color: orange;
    font-weight: bold;
  }

  small {
    display: block;
    font-size: 1rem;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Category = styled.div`
  width: 150px; /* Set a fixed width */
  height: 150px; /* Set a fixed height to match the width */
  margin: 20px; /* Increased margin for better spacing */
  background: #f8f8f8;
  border-radius: 50%; /* Make the category a circle */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: background 0.3s ease;
  border: 4px solid orange; /* Orange border */
  display: flex; /* Center content vertically and horizontally */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */

  &:hover {
    background: #e0e0e0;
  }

  p {
    font-size: 1.2rem; /* Adjust font size for better fit */
    color: black;
    font-weight: bold;
    margin: 0; /* Remove default margin */
    text-align: center; /* Center text */
  }
`;



const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { name: 'Vehicles' },
    { name: 'Tools & Equipment' },
    { name: 'Electronics' },
    { name: 'Event Spaces' },
    { name: 'Furniture' },
    { name: 'Clothing' },
    { name: 'Sporting Goods' },
    { name: 'Books' },
  ];

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <HeroSection>
          <BackgroundImage />
          <Slogan>
            <div>
              <MainHeading>
                Your One-Stop<br />
                Rental<br />
                Marketplace
              </MainHeading>
              <SubHeading>Enabling a new shopping experience</SubHeading>
            </div>
          </Slogan>
        </HeroSection>
        <ContentContainer>
          <ScrollableContent>
            <VideoWrapper>
              <video width="100%" height="auto" controls autoPlay muted>
                <source src="../video.mp4" type="video/mp4" />
              </video>
            </VideoWrapper>
            <TextWrapper ref={textRef}>
              <h2 className={textInView ? 'visible' : ''}>A world with endless possibilities</h2>
              <p className={textInView ? 'visible' : ''}>
                Imagine a world where everything you need is just a click away, where renting items from clothes to vehicles, event spaces to electronics, is as easy as shopping online. Welcome to RentEase, the ultimate rental marketplace designed to simplify your life. Whether you're looking for a designer dress for a special occasion, a car for a weekend getaway, a venue for your next big event, or the latest tech gadget to try out, our platform connects you with a diverse array of rental options at your fingertips. Embrace the convenience, explore endless possibilities, and enjoy a more sustainable way to access what you need, when you need it, without the commitment of ownership. Join us and discover a smarter, more flexible way to live.
              </p>
            </TextWrapper>
          </ScrollableContent>
        </ContentContainer>
        <CategoriesContainer>
          <Heading>Explore millions of offerings tailored to your business needs</Heading>
          <SubHeadingCategories>Find what you need from a wide range of categories</SubHeadingCategories>
          <StatsWrapper>
            <Stat>
              <span>200M+</span>
              <small>products</small>
            </Stat>
            <Stat>
              <span>200K+</span>
              <small>suppliers</small>
            </Stat>
            <Stat>
              <span>5,900</span>
              <small>product categories</small>
            </Stat>
            <Stat>
              <span>200+</span>
              <small>countries and regions</small>
            </Stat>
          </StatsWrapper>
          <CategoriesWrapper>
            {categories.map((category, index) => (
              <Category key={index}>
                <p>{category.name}</p>
              </Category>
            ))}
          </CategoriesWrapper>
        </CategoriesContainer>
      </Container></>
  );
};

export default About;