
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../Navbar/Navbar";
// import "./Cart.css";

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const navigate = useNavigate();

//   // LOAD CART
  
//   // eslint-disable-next-line
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//     calculateTotal(storedCart);
//   }, []);

//   // SAFE PRICE CALCULATION
//   const getPriceNumber = (price) => {
//     if (typeof price === "number") return price;
//     if (typeof price === "string") {
//       return parseFloat(price.replace(/[^\d]/g, "")) || 0;
//     }
//     return 0;
//   };

//   // TOTAL
//   const calculateTotal = (items) => {
//     const sum = items.reduce((acc, item) => {
//       return acc + getPriceNumber(item.price);
//     }, 0);

//     setTotal(sum);
//   };

//   // REMOVE ITEM
//   const removeItemFromCart = (index) => {
//     const updated = cart.filter((_, i) => i !== index);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//     calculateTotal(updated);
//   };

//   // CHECKOUT
//   const proceedToCheckout = () => {
//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }
//     navigate("/checkout");
//   };

//   return (
//     <div className="cart-page">

//       <NavBar />

//       <div className="cart-header">
//         <h1>Your Cart 🛒</h1>
//       </div>

//       <div className="cart-container">

//         <div className="cart-items">

//           {cart.length === 0 ? (
//             <h2>No items in cart</h2>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="cart-card">

//                 {item.image && <img src={item.image} alt="" />}

//                 <div>
//                   <h3>{item.title || item.name}</h3>
//                   <p>₹{getPriceNumber(item.price)}</p>
//                 </div>

//                 <button onClick={() => removeItemFromCart(index)}>
//                   Remove
//                 </button>

//               </div>
//             ))
//           )}

//         </div>

//         <div className="cart-summary">
//           <h2>Total: ₹{total}</h2>

//           <button onClick={proceedToCheckout}>
//             Checkout
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  // LOAD CART
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  // PRICE CLEANER
  const getPriceNumber = (price) => {
    if (!price) return 0;
    return Number(String(price).replace(/,/g, "")) || 0;
  };

  // TOTAL CALCULATION
  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => {
      return acc + getPriceNumber(item.price);
    }, 0);

    setTotal(sum);
  };

  // REMOVE ITEM (BY ID)
  const removeItemFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    calculateTotal(updated);
  };

  // CHECKOUT
  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Cart is empty 🛒");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="cart-page">

      <NavBar />

      <div className="cart-header">
        <h1>Your Cart 🛒</h1>
      </div>

      <div className="cart-container">

        {/* LEFT ITEMS */}
        <div className="cart-items">

          {cart.length === 0 ? (
            <h2>No items in cart 😢</h2>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-card">

                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <p>₹{getPriceNumber(item.price)}</p>
                </div>

                <button onClick={() => removeItemFromCart(item.id)}>
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="cart-summary">
       <h2>Summary</h2>
          <h2>Total Amount</h2>

          <h1>₹{total}</h1>

          <button onClick={proceedToCheckout}>
            Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;