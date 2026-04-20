import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const quantity = useSelector(state => state.cart.totalQuantity);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">Cart ({quantity})</Link>
    </nav>
  );
}
