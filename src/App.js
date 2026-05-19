import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About/About';
import Packages from './Packages/Packages';
import DataEntry from './DataEntry/DataEntry';
import ContactUs from './ContactUs/ContactUs';
import Dashboard from './Dashboard/Dashboard';
import NavBar from './Navbar/Navbar';
import Footer from "./Footer/Footer";
import Login from './Login/Login';
import Services from './Services/Services';
import CompanyOverview from './CompanyOverview/CompanyOverview';
//import NavbarHook from './NavbarHook/NavbarHook';
import Chatboat from './Chatboat/Chatboat';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton'
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import PaymentGateway from './PaymentGateway/PaymentGateway';


function App() {
  return (
    <Router>
      <div>
       
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navBar" element={<NavBar />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/login' element={<Login />} />
             <Route path='/services' element={<Services />} />
             <Route path='/overview' element={<CompanyOverview />} />
              <Route path='/chatboat' element={<Chatboat />} />
               <Route path='/whatsapp' element={<WhatsAppButton />} />
                 <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
               <Route path='/paymentgateway' element={<PaymentGateway />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
