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

    await dispatch({ type: "ADD", id: props.Item._id, name: props.Item.name, price: props.Item.price, timePeriod: props.Item.timePeriod })
  }

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img src={props.Item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.Item.name}</h5>
            <p>{props.Item.description}</p>
            <p>{props.Item.price}</p>
            <p>{props.Item.timePeriod}</p>
            <hr></hr>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Rent</button>
          </div>
        </div>
      </div>
    </div>
  )
}
