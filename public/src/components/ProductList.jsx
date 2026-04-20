import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Header from "./Header";

const plants = [
  { id: 1, name: "Snake Plant", price: 120, category: "Indoor" },
  { id: 2, name: "Aloe Vera", price: 90, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 150, category: "Flowering" },
  { id: 4, name: "Rose", price: 200, category: "Flowering" },
  { id: 5, name: "Bonsai", price: 300, category: "Decorative" },
  { id: 6, name: "Ficus", price: 250, category: "Decorative" },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h2>Plants</h2>

      {["Indoor", "Flowering", "Decorative"].map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id}>
              <p>{p.name}</p>
              <p>R{p.price}</p>

              <button onClick={() => dispatch(addToCart(p))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
