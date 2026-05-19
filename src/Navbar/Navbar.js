// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import { IoClose, IoMenu } from "react-icons/io5";
// // import "./Navbar.css";
// // import logo1 from "../logo1.png"

// // const Navbar = () => {
// //   const [showMenu, setShowMenu] = useState(false);

// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu);
// //   };

// //   const closeMenuOnMobile = () => {
// //     if (window.innerWidth <= 1150) {
// //       setShowMenu(false);
// //     }
// //   };

// //   useEffect(() => {
// //     // Close menu when resizing
// //     const handleResize = () => {
// //       if (window.innerWidth > 1150) {
// //         setShowMenu(false);
// //       }
// //     };

// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   return (
// //     <header className="header">
// //       <nav className="nav container">
// //         <NavLink to="/" className="nav__logo">
// //         <img src={logo1}  className="nav__logo-img" />
// //           New India Software Solutions Pvt Ltd
// //         </NavLink>

// //         <div
// //           className={`nav__menu ${showMenu ? "show-menu" : ""}`}
// //           id="nav-menu"
// //         >
// //           <ul className="nav__list">
// //             <li className="nav__item">
// //               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
// //                 About
// //               </NavLink>
// //             </li>

// //              <li className="nav__item">
// //               <NavLink to="/overview" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Overview
// //               </NavLink>
// //             </li>

// //             <li className="nav__item">
// //               <NavLink
// //                 to="/packages"
// //                 className="nav__link"
// //                 onClick={closeMenuOnMobile}
// //               >
// //                 Packages
// //               </NavLink>
// //             </li>
// //              <li className="nav__item">
// //               <NavLink
// //                 to="/services"
// //                 className="nav__link"
// //                 onClick={closeMenuOnMobile}
// //               >
// //                 Services
// //               </NavLink>
// //             </li>
// //             <li className="nav__item">
// //               <NavLink
// //                 to="/contact-us"
// //                 className="nav__link"
// //                 onClick={closeMenuOnMobile}
// //               >
// //                 Contact Us
// //               </NavLink>
// //             </li>
// //             <li className="nav__item dropdown">
// //               <span className="nav__link dropdown-toggle">
// //                 More
// //               </span>
// //               <ul className="dropdown-menu">
// //                 <li className="dropdown-item">
// //                   <NavLink
// //                     to="/data-entry"
// //                     className="nav__link"
// //                     onClick={closeMenuOnMobile}
// //                   >
// //                     Data Entry
// //                   </NavLink>
// //                 </li>
// //                 <li className="dropdown-item">
// //                   <NavLink
// //                     to="/login"
// //                     className="nav__link"
// //                     onClick={closeMenuOnMobile}
// //                   >
// //                     Dashboard
// //                   </NavLink>
// //                 </li>
// //               </ul>
// //             </li>
            
// //           </ul>
// //           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
// //             <IoClose />
// //           </div>
// //         </div>

// //         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
// //           <IoMenu />
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import { IoClose, IoMenu } from "react-icons/io5";
// // import "./Navbar.css";
// // import logo1 from "../logo1.png";

// // const Navbar = () => {
// //   const [showMenu, setShowMenu] = useState(false);

// //   const toggleMenu = () => {
// //     setShowMenu((prev) => !prev);
// //   };

// //   const closeMenuOnMobile = () => {
// //     setShowMenu(false);
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 1150) {
// //         setShowMenu(false);
// //       }
// //     };

// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return (
// //     <header className="header">
// //       <nav className="nav container">

// //         {/* LOGO */}
// //         <NavLink to="/" className="nav__logo" onClick={closeMenuOnMobile}>
// //           <img src={logo1} alt="logo" className="nav__logo-img" />
// //           NISS Software Solutions
// //         </NavLink>

// //         {/* MENU */}
// //         <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>

// //           {/* CLOSE ICON (MOBILE) */}
// //           <div className="nav__close" onClick={toggleMenu}>
// //             <IoClose />
// //           </div>

// //           <ul className="nav__list">

// //             <li>
// //               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Home
// //               </NavLink>
// //             </li>

// //             <li>
// //               <NavLink to="/overview" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Overview
// //               </NavLink>
// //             </li>

// //             <li>
// //               <NavLink to="/packages" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Packages
// //               </NavLink>
// //             </li>

// //             <li>
// //               <NavLink to="/services" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Services
// //               </NavLink>
// //             </li>

// //             <li>
// //               <NavLink to="/contact-us" className="nav__link" onClick={closeMenuOnMobile}>
// //                 Contact
// //               </NavLink>
// //             </li>

// //             {/* DROPDOWN */}
// //             <li className="dropdown">

// //               <span className="nav__link">
// //                 More
// //               </span>

// //               <ul className="dropdown-menu">

// //                 <li className="dropdown-item">
// //                   <NavLink to="/data-entry" className="nav__link" onClick={closeMenuOnMobile}>
// //                     Data Entry
// //                   </NavLink>
// //                 </li>

// //                 <li className="dropdown-item">
// //                   <NavLink to="/login" className="nav__link" onClick={closeMenuOnMobile}>
// //                     Dashboard
// //                   </NavLink>
// //                 </li>

// //               </ul>
// //             </li>

// //           </ul>

// //         </div>

// //         {/* HAMBURGER */}
// //         <div className="nav__toggle" onClick={toggleMenu}>
// //           <IoMenu />
// //         </div>

// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;




// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
// import { FaShoppingCart } from "react-icons/fa";
// import "./Navbar.css";
// import logo1 from "../logo1.png";



// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

 
//   const [cartCount, setCartCount] = useState(0);

//   const toggleMenu = () => setShowMenu((prev) => !prev);

//   const closeMenuOnMobile = () => setShowMenu(false);

 
//   useEffect(() => {
//     const updateCart = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartCount(cart.length);
//     };

//     updateCart();

//     window.addEventListener("storage", updateCart);

//     return () => window.removeEventListener("storage", updateCart);
//   }, []);

//   return (
//     <header className="header">
//       <nav className="nav container">


//         {/* LOGO */}
//         <NavLink to="/" className="nav__logo" onClick={closeMenuOnMobile}>
//           <img src={logo1} alt="logo" className="nav__logo-img" />
//           NISS Software Solutions</NavLink>
        

//         {/* MENU */}
//         <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>

//           <div className="nav__close" onClick={toggleMenu}>
//             <IoClose />
//           </div>

//           <ul className="nav__list">

//             <li>
//               <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/overview" className="nav__link" onClick={closeMenuOnMobile}>
//                 Overview
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/packages" className="nav__link" onClick={closeMenuOnMobile}>
//                 Packages
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/services" className="nav__link" onClick={closeMenuOnMobile}>
//                 Services
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to="/contact-us" className="nav__link" onClick={closeMenuOnMobile}>
//                 Contact
//               </NavLink>
//             </li>

//             {/* CART (MOBILE MENU INSIDE) */}
            

//             {/* DROPDOWN */}
//             <li className="dropdown">

//               <span className="nav__link">More</span>

//               <ul className="dropdown-menu">

//                 <li className="dropdown-item">
//                   <NavLink to="/data-entry" onClick={closeMenuOnMobile}>
//                     Data Entry
//                   </NavLink>
//                 </li>

//                 <li className="dropdown-item">
//                   <NavLink to="/login" onClick={closeMenuOnMobile}>
//                     Dashboard
//                   </NavLink>
//                 </li>

//               </ul>
//             </li>

//           </ul>

//         </div>

//         {/* RIGHT SIDE ICONS */}
//         <div className="nav__right">

//           {/* CART ICON */}
//           <NavLink to="/cart" className="cart-icon">

//             <FaShoppingCart />

//             {cartCount > 0 && (
//               <span className="cart-badge">{cartCount}</span>
//             )}

//           </NavLink>

//           {/* HAMBURGER */}
//           <div className="nav__toggle" onClick={toggleMenu}>
//             <IoMenu />
//           </div>


//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//             <IoClose className="nav__close__icon"/>
//           </div>
//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <IoMenu className="nav__toggle__icon" />

//         </div>

//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import logo1 from "../logo1.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const closeMenuOnMobile = () => setShowMenu(false);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();

    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="nav__logo"
          onClick={closeMenuOnMobile}
        >
          <img src={logo1} alt="logo" className="nav__logo-img" />
          NISS Software Solutions
        </NavLink>

        {/* MENU */}
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>

          {/* CLOSE BUTTON */}
          <div className="nav__close" onClick={toggleMenu}>
            <IoClose />
          </div>

          <ul className="nav__list">

            <li>
              <NavLink
                to="/"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/overview"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Overview
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/packages"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Packages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="nav__link"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>

            {/* DROPDOWN */}
            <li className="dropdown">

              <span className="nav__link">More</span>

              <ul className="dropdown-menu">

                <li className="dropdown-item">
                  <NavLink
                    to="/data-entry"
                    onClick={closeMenuOnMobile}
                  >
                    Data Entry
                  </NavLink>
                </li>

                <li className="dropdown-item">
                  <NavLink
                    to="/login"
                    onClick={closeMenuOnMobile}
                  >
                    Dashboard
                  </NavLink>
                </li>

              </ul>
            </li>

          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav__right">

          {/* CART */}
          <NavLink
            to="/cart"
            className="cart-icon"
            onClick={closeMenuOnMobile}
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* MOBILE MENU BUTTON */}
          <div className="nav__toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;