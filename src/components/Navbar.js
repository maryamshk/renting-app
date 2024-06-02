


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from '../components/ContextReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ search, setSearch }) {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "2rem", fontFamily: "Prompt", color: "#686868" }}>RentEase</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
              <Link className="nav-link fs-5" aria-current="page" to="/">Home</Link>
              <Link className="nav-link fs-5" aria-current="page" to="/myOrder">Rented Items</Link>
            </div>
            <div className="ms-auto d-flex">
              <div style={{ marginRight: "10px", width: '17rem', backgroundColor: '#f0f0f0' }}>
                <input
                  style={{ borderRadius: '5px', backgroundColor: '#f0f0f0', outline: 'none', boxShadow: 'none' }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); }}
                />
              </div>
              <button onClick={() => { setCartView(true); }} style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060', marginRight: "3px" }}>Cart {""}
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black' }} />
              </button>
              <div className="navbar-nav mr-auto">
                <Link className="nav-link fs-5" aria-current="page" to="/seller">Seller</Link>
              </div>
              {cartView && (
                <Modal onClose={() => { setCartView(false); }}>
                  <Cart />
                </Modal>
              )}
              <button onClick={handleLogout} style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060', marginRight: '2px' }}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
