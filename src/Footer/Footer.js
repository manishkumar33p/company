
// import React, { useState, useEffect } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <footer className="footer">
//       <div className="footer__overlay"></div>

//       <div className="footer__container">

//         {/* LEFT SECTION */}
//         <div className="footer__left">
//           <h2>New India Software Solutions</h2>

//           <p className="footer__text">
//             Building smart digital solutions for modern businesses with innovation and trust.
//           </p>

//           <div className="footer__address">
//             <FaMapMarkerAlt />
//             <span>
//               C-296, SK-1, Sector-93, Noida, Uttar Pradesh, India
//             </span>
//           </div>

//           <div className="footer__time">
//             <FaClock />
//             <span>{currentTime}</span>
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="footer__right">
//           <h3>Connect With Us</h3>

//           <div className="footer__socials">
//             <a href="/packages" target="_blank" rel="noreferrer">
//               <FaFacebookF />
//             </a>

//             <a href="/buy" target="_blank" rel="noreferrer">
//               <FaInstagram />
//             </a>

//             <a href="/buy" target="_blank" rel="noreferrer">
//               <FaLinkedinIn />
//             </a>
//           </div>

//           <p className="footer__copyright">
//             © {new Date().getFullYear()} New India Software Solutions Pvt Ltd
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">

      <div className="footer__overlay"></div>

      <div className="footer__container">

        {/* LEFT */}
        <div className="footer__col">
          <h2>NISS Software Solutions</h2>

          <p>
            We build modern websites, mobile apps,
            marketing systems and business automation solutions.
          </p>

          <div className="footer__info">
            <FaMapMarkerAlt />
            <span>Noida, Uttar Pradesh, India</span>
          </div>

          <div className="footer__info">
            <FaPhone />
            <span>+91 00000 00000</span>
          </div>

          <div className="footer__info">
            <FaEnvelope />
            <span>contact@niss.com</span>
          </div>

          <div className="footer__info">
            <FaClock />
            <span>{time}</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer__col">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/overview">Overview</a>
          <a href="/services">Services</a>
          <a href="/packages">Packages</a>
          <a href="/contact-us">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer__col">
          <h3>Follow Us</h3>

          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

          <div className="footer__cta">
            <h4>Let’s Build Something Amazing 🚀</h4>
            <button>Get Started</button>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} NISS Software Solutions Pvt Ltd
      </div>

    </footer>
  );
};

export default Footer;