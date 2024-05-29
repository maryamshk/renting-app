import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {
  const data = useCart();
  let dispatch = useDispatchCart();
  let options = props.option;
  let priceOptions = Object.keys(options)
  const priceRef = useRef();
  const [quantity, setaQuantity] = useState(1);
  const [size, setSize] = useState("")

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  const handleAddToCart = async () => {
    let product = []
    for (const item of data) {
      if (item.id === props.Item._id) {
        product = item;

        break;
      }
    }
    if (product.length !== 0) {
      if (product.size === size) {
        await dispatch({ type: "UPDATE", id: props.Item._id, price: finalPrice, quantity: quantity })
        return
      }
      else if (product.size !== size) {
        await dispatch({ type: "ADD", id: props.Item._id, name: props.Item.name, price: finalPrice, quantity: quantity, size: size, img: props.ImgSrc })
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.Item._id, name: props.Item.name, price: finalPrice, quantity: quantity, size: size })
  }

  let finalPrice = quantity * parseInt(options[size])

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: '18rem', maxHeight: '360px' }}>
          <img src={props.Item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.Item.name}</h5>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success" onChange={(e) => { setaQuantity(e.target.value) }}>
                {Array.from(Array(6), (e, i) => {
                  //second arg (e,i) is a mapping function that's applied to each element of the newly created array.
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
                {
                  priceOptions.map((data) => {
                    if (data === "_id") {
                      return null; // Skip rendering this option
                    } else {
                      return <option key={data} value={data}>{data}</option>;
                    }
                  })
                }
              </select>

              <div className="d-inline h-100 fs-5">${finalPrice}</div>
              <hr></hr>
              <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Rent</button>
            </div>
          </div>
        </div>
      </div></div>
  )
}
