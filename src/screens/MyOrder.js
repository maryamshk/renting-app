import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail);

    const res = await fetch("http://localhost:5000/api/myOrderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userEmail })
    });

    const response = await res.json();
    setOrderData(response.orderData);
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className='container'>
        <div className='row'>
          {orderData && orderData.length > 0 ? (
            orderData.map((orderGroup, index) => (
              orderGroup.map((item, i) => (
                <div key={`${index}-${i}`} className='col-12 col-md-6 col-lg-3'>
                  {item.Order_date ? (
                    <div className='m-auto mt-5'>
                      <strong>{new Date(item.Order_date).toLocaleDateString()}</strong>
                      <hr />
                    </div>
                  ) : (
                    <div className='col-12 col-md-6 col-lg-3'>
                      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div className='container w-100 p-0' style={{ height: "38px" }}>
                            <div className='d-inline ms-2 h-100 w-20 fs-5'>
                              ₹{item.price}/-
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ))
          ) : (
            <div>No orders found</div>
          )}
        </div>
      </div>
    </div>
  );
}
