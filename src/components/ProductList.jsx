import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 50,
    image: "https://source.unsplash.com/200x200/?aloe",
    category: "Indoor",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 80,
    image: "https://source.unsplash.com/200x200/?snake-plant",
    category: "Indoor",
  },
  {
    id: 3,
    name: "Rose",
    price: 40,
    image: "https://source.unsplash.com/200x200/?rose",
    category: "Outdoor",
  },
  {
    id: 4,
    name: "Lavender",
    price: 60,
    image: "https://source.unsplash.com/200x200/?lavender",
    category: "Outdoor",
  },
  {
    id: 5,
    name: "Cactus",
    price: 30,
    image: "https://source.unsplash.com/200x200/?cactus",
    category: "Succulent",
  },
  {
    id: 6,
    name: "Bamboo",
    price: 90,
    image: "https://source.unsplash.com/200x200/?bamboo",
    category: "Indoor",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Plants Store</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="100%"
              height="150"
            />

            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>R {product.price}</p>

            <button
              onClick={() => dispatch(addItem(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
