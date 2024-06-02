// import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useCart, useDispatchCart } from '../components/ContextReducer';

// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }

//   const handleCheckOut = async () => {
//     let userEmail = localStorage.getItem("userEmail");
//     console.log(data, userEmail, new Date());
//     try {
//       let response = await fetch("http://localhost:5000/api/orderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           order_data: data,
//           email: userEmail,
//           order_date: new Date().toDateString()
//         })
//       });
//       console.log("JSON RESPONSE:", response.status);
//       dispatch({ type: "DROP" });
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   let totalPrice = data.reduce((total, item) => total + item.price, 0)
//   return (
//     <div>
//       {console.log(data)}
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col' >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr>
//                 <th scope='row' >{index + 1}</th>
//                 <td >{item.name}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.size}</td>
//                 <td>{item.price}</td>
//                 <td ><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>
//     </div>
//   )
// } 


import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [weekendUse, setWeekendUse] = useState({ saturday: false, sunday: false });
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-2' style={{ color: "#feb47b" }}>Your cart is empty</div>
      </div>
    );
  }

  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem('userEmail');
    console.log(data, userEmail, new Date());
    try {
      let response = await fetch('http://localhost:5000/api/orderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
          rental_period: { start: startDate, end: endDate },
          weekend_use: weekendUse,
        }),
      });
      console.log('JSON RESPONSE:', response.status);
      dispatch({ type: 'DROP' });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const rentalDays = calculateDays(startDate, endDate);
  const totalPrice = data.reduce((total, item) => total + item.price, 0);
  const weekendPrice = (weekendUse.saturday ? 50 : 0) + (weekendUse.sunday ? 50 : 0);
  const rentalPrice = rentalDays * 60;
  const finalPrice = totalPrice + rentalPrice + weekendPrice;

  return (
    <div>
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Start Date</th>
              <th scope='col'>End Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </td>
                <td>
                  <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </td>
                <td>
                  <button type='button' className='btn p-0'>
                    <DeleteIcon onClick={() => { dispatch({ type: 'REMOVE', index: index }); }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='mt-3'>
          <label>
            <input type='checkbox' checked={weekendUse.saturday} onChange={() => setWeekendUse({ ...weekendUse, saturday: !weekendUse.saturday })} /> Saturday
          </label>
          <label className='ml-2'>
            <input type='checkbox' checked={weekendUse.sunday} onChange={() => setWeekendUse({ ...weekendUse, sunday: !weekendUse.sunday })} /> Sunday
          </label>
        </div>
        <div>
          <h1 className='fs-2'>Total Price: ${finalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}