import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';
<<<<<<< Updated upstream
import Seller from './screens/Seller.js';

=======
import Seller from './screens/Seller.js'; // Import the Seller component
>>>>>>> Stashed changes

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
<<<<<<< Updated upstream
            <Route exact path="login" element={<Login />} />
            <Route exact path='createuser' element={<Signup />} />
            <Route exact path='myOrder' element={<MyOrder />} />
            <Route exact path='seller' element={<Seller />} />


=======
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            {/* Add the Seller component under the desired route */}
            <Route exact path="/Seller" element={<Seller />} />
>>>>>>> Stashed changes
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
