import { useState } from "react";

export default function GoldDealerWebsite() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Rope Chain", price: 150 },
    { name: "Cuban Bracelet", price: 300 },
    { name: "Gold Ring", price: 180 },
    { name: "Custom Pendant", price: 220 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: "black", color: "gold", minHeight: "100vh", padding: 20 }}>
      <h1>AMIRA ALDAHABI GOLD</h1>
      <p>Luxury Gold Jewelry</p>

      {products.map((item, i) => (
        <div
          key={i}
          style={{
            border: "1px solid gold",
            padding: 15,
            marginBottom: 15,
            borderRadius: 10,
          }}
        >
          <h2>{item.name}</h2>
          <p>${item.price}</p>

          <button
            onClick={() => addToCart(item)}
            style={{
              background: "gold",
              color: "black",
              padding: 10,
              border: "none",
              borderRadius: 5,
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart Total: ${total}</h2>
    </div>
  );
}