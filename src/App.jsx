import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import About from "./About/About";
import Packages from "./Packages/Packages";
import DataEntry from "./DataEntry/DataEntry";
import ContactUs from "./ContactUs/ContactUs";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Services from "./Services/Services";
import CompanyOverview from "./CompanyOverview/CompanyOverview";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import PaymentGateway from "./PaymentGateway/PaymentGateway";

// Components
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Chatboat from "./Chatboat/Chatboat";
import WhatsAppButton from "./WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <Router>

      {/* COMMON LAYOUT (MOST IMPORTANT FIX) */}
      <NavBar />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/data-entry" element={<DataEntry />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/overview" element={<CompanyOverview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />
        <Route path="/chatboat" element={<Chatboat />} />
      </Routes>

      

    </Router>
  );
}

export default App;