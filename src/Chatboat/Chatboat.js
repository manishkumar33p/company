import React, { useState, useEffect } from "react";
import "./Chatboat.css";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Welcome to NISS Software Solutions!" },
    { from: "bot", text: "How can I help you today?" }
  ]);

  const [input, setInput] = useState("");

  // AUTO POPUP AFTER 4 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };

    let botReply = "Thanks! हम जल्द आपको contact करेंगे 😊";

    if (input.toLowerCase().includes("price")) {
      botReply = "Our pricing starts from ₹9,999 🚀";
    }

    if (input.toLowerCase().includes("service")) {
      botReply = "We offer Website, App, SEO, Ads, Branding & more 💻";
    }

    setMessages([...messages, userMsg, { from: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="chatbot">

      {/* FLOATING ICON */}
      <div className="chatbot__icon" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHAT BOX */}
      {open && (
        <div className="chatbot__box">

          <div className="chatbot__header">
            <h4>NISS Assistant</h4>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chatbot__body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot__footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}

    </div>
  );
};

export default ChatBot;