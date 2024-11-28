import  { createContext, useReducer } from "react";

// Create Context
export const CartContext = createContext();

// Initial State
const initialState = {
  cart: [],
};

// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "UPDATE_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, name: action.payload.name } : item
        ),
      };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };

    default:
      return state;
  }
};

// Context Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
