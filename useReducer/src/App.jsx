import  { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

const App = () => {
  const { state, dispatch } = useContext(CartContext);
  const [itemName, setItemName] = useState("");

  // Add Item to Cart
  const handleAddItem = () => {
    if (itemName.trim()) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { id: Date.now(), name: itemName },
      });
      setItemName(""); // Clear input
    }
  };

  // Update Item in Cart
  const handleUpdateItem = (id) => {
    const newName = prompt("Enter new name for the item:");
    if (newName) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: { id, name: newName },
      });
    }
  };

  // Remove Item from Cart
  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Add Item */}
      <div>
        <input
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Cart Items */}
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleUpdateItem(item.id)}>Update</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
