import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from '../components/ContextReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "2rem", fontFamily: "Prompt", color: "	#686868" }}>RentEase</Link>
          <button className="navbar-toggler" tsype="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {localStorage.getItem("authToken") ? (
              <>
                <div className="navbar-nav mr-auto">
                  <Link className="nav-link fs-5" aria-current="page" to="/">Home</Link>
                </div>

                <div className="navbar-nav mr-auto">
                  <Link className="nav-link fs-5" aria-current="page" to="/myOrder">Rented Items</Link>
                </div>
              </>

            ) :
              ""
            }

            {!localStorage.getItem("authToken") ? (
              <>
                <div className='ms-auto'>
                  <Link to="/login">
                    <button style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060', marginRight: '2px' }}>Login</button>
                  </Link>
                  <Link to="/createuser">
                    <button style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060' }}>SignUp</button>
                  </Link>
                </div>
              </>

            ) :
              <>
                <div className='ms-auto'>
                  <button onClick={() => { setCartView(true) }} style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060', marginRight: "3px" }}>Cart {""}
                    <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'black' }} />
                  </button>

                  {cartView ?
                    <Modal onClose={() => { setCartView(false) }}>
                      <Cart></Cart>
                    </Modal>
                    : null}

                  <button onClick={handleLogout} style={{ backgroundColor: 'transparent', borderRadius: '20px', padding: '5px 20px', border: '2px solid #BEBEBE', color: '#606060', marginRight: '2px' }}>Logout</button>
                </div>

              </>

            }
          </div>
        </div>
      </nav>
    </div>
  )
}
