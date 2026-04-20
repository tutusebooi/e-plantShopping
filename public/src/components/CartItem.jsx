import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total calculations
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {/* Summary */}
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Cost: R {totalCost.toFixed(2)}</h2>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🌱</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              width="80"
              height="80"
            />

            {/* Details */}
            <div>
              <h3>{item.name}</h3>
              <p>Price: R {item.price}</p>
              <p>Subtotal: R {item.price * item.quantity}</p>
            </div>

            {/* Controls */}
            <div style={{ marginLeft: "auto" }}>
              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
              >
                -
              </button>

              <span style={{ margin: "0 10px" }}>
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                style={{ marginLeft: "10px", color: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => alert("Coming Soon 🚧")}>
          Checkout
        </button>

        <Link to="/products">
          <button style={{ marginLeft: "10px" }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
