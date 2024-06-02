import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from '../components/ContextReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/login');
  };

  return (
    <>
      <Header>
        <Logo>
          <img src="../ecomlogo.png" alt="Logo" style={{ width: '70px' }} />
          <LogoText>RentEase</LogoText>
        </Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myOrder">Rented Items</NavLink>
          <NavLink to="/seller">Become a Seller</NavLink>
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CartButton onClick={() => { setCartView(true); }}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
          </CartButton>
          {cartView && (
            <Modal onClose={() => { setCartView(false); }}>
              <Cart />
            </Modal>
          )}
          <button onClick={handleLogout} style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid white', color: 'white', marginLeft: '12px' }}>Logout</button>

        </div>
      </Header>

    </>
  );
}


const Header = styled.nav`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  color: white;
`;

const LogoText = styled.span`
  margin-left: 10px;
  font-size: 3rem;
  font-weight: 450;
  font-family: 'Roboto', sans-serif;
  color: white
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  text-decoration:none
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.5rem;
  font-weight: 450;
  font-family: 'Roboto', sans-serif;
  &:hover {
    color: #FFFFF7;
  }
`;

const Button = styled.button`
  background-color: #ff7e5f;
  border: none;
  border-radius: 20px;
  padding: 8px 15px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: #feb47b;
  }
`;

const CartButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;



