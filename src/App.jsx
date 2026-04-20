import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image" style={{ textAlign: "center" }}>
      {!showProducts ? (
        <div style={{ paddingTop: "150px" }}>
          <h1>Welcome to Paradise Nursery</h1>

          <p>
            Discover a wide variety of beautiful plants to bring life into your home.
          </p>

          <button
            onClick={() => setShowProducts(true)}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
};

export default App;
