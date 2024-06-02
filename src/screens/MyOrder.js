import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);


  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem('userEmail');

    try {
      const res = await fetch("http://localhost:5000/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userEmail })
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const response = await res.json();
      console.log(response.orderData.total_price)


      if (response.orderData && response.orderData.order_data) {
        setOrderData(response.orderData.order_data);
      } else {
        setOrderData([]);
      }
    } catch (error) {
      console.error('Error fetching order data:', error);
      setOrderData([]);
    }
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
                      <div className="card mt-3" style={{ width: "14rem", height: "60px", backgroundColor: '#feb47b', color: 'white' }}>
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <div className='container w-100 p-0' style={{ height: "38px" }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ))
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem', color: '#ff7e5f', fontSize: '1rem' }}>No orders found</div>
          )}
        </div>
      </div>
    </div>
  );
}
