import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from '../components/ContextReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


export default function Navbar({ search, setSearch }) {
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
          <FontAwesomeIcon icon={faCartPlus} style={{ color: 'white' }} />
          <LogoText>RentEase</LogoText>
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/myOrder">Rented Items</NavLink>
          <NavLink to="/seller">Become a Seller</NavLink>
          <NavLink to="/help-support">Help & Support</NavLink>
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
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search in RentEase"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
        />
      </SearchContainer>
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
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.5rem;
  font-weight: 450;
  font-family: 'Roboto', sans-serif;
  &:hover {
    text-decoration: underline;
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



const SearchContainer = styled.div`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  padding-left: 15px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;
