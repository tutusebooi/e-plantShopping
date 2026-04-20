import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/CartSlice";
import Header from "../components/Header";

export default function Cart() {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <h2>Shopping Cart</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>R{item.price}</p>
          <p>Total: R{item.price * item.quantity}</p>

          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <h3>Total: R{total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
}
