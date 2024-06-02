import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {
  const data = useCart();
  let dispatch = useDispatchCart();
  const handleAddToCart = async () => {
    let product = []
    for (const item of data) {
      if (item.id === props.Item._id) {
        product = item;

        break;
      }
    }

    await dispatch({ type: "ADD", id: props.Item._id, name: props.Item.name, price: props.Item.price })
  }

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '500px', marginBottom: '2rem' }}>
          <img src={props.Item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title" style={{ height: '3.5rem' }}>{props.Item.name}</h5>
            <p style={{ height: '10rem' }}>{props.Item.description}</p>
            <p>${props.Item.price}/day</p>
            <hr></hr>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Rent</button>
          </div>
        </div>
      </div>
    </div>
  )
}
