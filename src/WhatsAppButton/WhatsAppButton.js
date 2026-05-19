import React, { useEffect, useState } from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumbers = {
    sales: "919958424916",
    support: "919990046841"
  };

  const message = "Hello! I need help regarding your services.";

  const url = `https://wa.me/${phoneNumbers.sales}?text=${encodeURIComponent(message)}`;

  // AUTO TOOLTIP + GREETING POPUP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // CLICK TRACKING
  const handleClick = () => {
    console.log("WhatsApp Clicked - Lead Generated");
  };

  return (
    <div className="whatsapp-wrapper">

      {/* FLOATING LABEL */}
      <div className="wa-label">Contact Us</div>

      {/* TOOLTIP */}
      {showTooltip && (
        <div className="wa-tooltip">
          👋 Chat on WhatsApp
        </div>
      )}

      {/* BUTTON */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        onClick={handleClick}
      >
        <FaWhatsapp />
      </a>

    </div>
  );
};

export default WhatsAppButton;