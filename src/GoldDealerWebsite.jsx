import { useState } from "react";

export default function GoldDealerWebsite() {
  const [cart, setCart] = useState([]);

  const products = [
    { 
      name: "Rope Chain", 
      price: 150,
      image: "/images/rope-chain.jpg"
    },
    { 
      name: "Cuban Bracelet", 
      price: 300,
      image: "/images/cuban-bracelet.jpg"
    },
    { 
      name: "Gold Ring", 
      price: 180,
      image: "/images/gold-ring.jpg"
    },
    { 
      name: "Custom Pendant", 
      price: 220,
      image: "/images/custom-pendant.jpg"
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ background: "black", color: "gold", minHeight: "100vh", padding: 20, fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: 40, borderBottom: "2px solid gold", paddingBottom: 20 }}>
        <h1 style={{ fontSize: 48, margin: "10px 0" }}>AMIRA ALDAHABI GOLD</h1>
        <p style={{ fontSize: 18, margin: 0 }}>✨ Luxury Gold Jewelry ✨</p>
      </header>

      {/* Products Section */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: 30, fontSize: 32 }}>Our Collection</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginBottom: 40 }}>
          {products.map((item, i) => (
            <div
              key={i}
              style={{
                border: "2px solid gold",
                padding: 15,
                borderRadius: 10,
                background: "#1a1a1a",
                textAlign: "center",
                transition: "transform 0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {/* Product Image */}
              <img 
                src={item.image} 
                alt={item.name}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 10,
                  background: "#333"
                }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/250x200?text=" + item.name;
                }}
              />
              
              <h3 style={{ margin: "10px 0", fontSize: 20 }}>{item.name}</h3>
              <p style={{ fontSize: 24, color: "#FFD700", margin: "10px 0", fontWeight: "bold" }}>${item.price}</p>

              <button
                onClick={() => addToCart(item)}
                style={{
                  background: "gold",
                  color: "black",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background 0.3s"
                }}
                onMouseEnter={(e) => e.target.style.background = "#FFC700"}
                onMouseLeave={(e) => e.target.style.background = "gold"}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", borderTop: "2px solid gold", paddingTop: 30 }}>
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <p style={{ fontSize: 18, color: "#999" }}>Your cart is empty</p>
        ) : (
          <div>
            <div style={{ background: "#1a1a1a", padding: 20, borderRadius: 10, marginBottom: 20 }}>
              {cart.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #333" }}>
                  <div>
                    <p style={{ margin: 0, fontSize: 16 }}>{item.name}</p>
                    <p style={{ margin: "5px 0 0 0", color: "#FFD700", fontSize: 14 }}>${item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(i)}
                    style={{
                      background: "#ff4444",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: 5,
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div style={{ background: "#FFD700", color: "black", padding: 20, borderRadius: 10, textAlign: "right" }}>
              <h2 style={{ margin: 0, fontSize: 28 }}>Cart Total: ${total}</h2>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: 40, paddingTop: 20, borderTop: "2px solid gold", color: "#999", fontSize: 14 }}>
        <p>© 2026 AMIRA ALDAHABI GOLD. All rights reserved.</p>
        <p>Contact us for custom orders and bulk inquiries</p>
      </footer>
    </div>
  );
}