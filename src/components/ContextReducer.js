import React, { createContext, useContext, useReducer } from 'react'

// we are using useReducer hook instead of usestate hook and usereducer has dispatch function, dispatch has multiple no of action types; add to cart, delete from cart
const CartStateContext = createContext();  //state we can use globally
const CartDispatchContext = createContext();  //used to change state

//we'll mention in dispatch what actions to perform and what state to change

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: action.id, name: action.name, img: action.img, description: action.description, price: action.price, timePeriod: action.timePeriod }]

    case "REMOVE":
      let newArr = [...state]
      newArr.splice(action.index, 1)
      return newArr

    // case "UPDATE":
    //   let arr = [...state]
    //   arr.find((item, index) => {
    //     if (item.id === action.id) {
    //       arr[index] = { ...item, qty: parseInt(action.qty) + item.qty, price: action.price + item.price }
    //     }
    //     return arr
    //   })
    //   return arr


    case "DROP":
      let empArr = [];
      return empArr
    default:
      return state;
  }


}
export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, [])    //initial value of state and dispatch functionality
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);