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
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import PaymentGateway from "./PaymentGateway/PaymentGateway";

// Components (agar pages ke alawa use ho rahe hain)
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Chatboat from "./Chatboat/Chatboat";
import WhatsAppButton from "./WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <Router>
      <Routes>

        {/* MAIN PAGES */}
        <Route path="/" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/data-entry" element={<DataEntry />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/overview" element={<CompanyOverview />} />

        {/* ECOMMERCE */}
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />

        {/* EXTRA UTIL PAGES (optional) */}
        <Route path="/chatboat" element={<Chatboat />} />
        <Route path="/whatsapp" element={<WhatsAppButton />} />

        {/* NAVBAR / FOOTER (normally routes nahi hote, but optional) */}
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </Router>
  );
}

export default App;