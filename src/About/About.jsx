// import React from "react";
// import "./About.css";

// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// import Chatboat from "../Chatboat/Chatboat";
// import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

// import MarvVideo2 from "../marvv3.mp4";
// import Software from "../Software.jfif";

// import CEO from "../Manish.jpeg";
// import CFO from "../N.jpeg";

// const services = [
//   "Website Development",
//   "App Development",
//   "SEO Optimization",
//   "Google Ads",
//   "YouTube Ads",
//   "Social Media Marketing",
//   "Graphic Designing",
//   "Branding",
//   "E-Commerce Setup",
//   "Business Automation",
// ];

// const About = () => {
//   return (
//     <div className="home-container">

//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="hero-section">

//         <video className="hero-video" autoPlay loop muted>
//           <source src={MarvVideo2} type="video/mp4" />
//         </video>

//         <div className="hero-overlay"></div>

//         <div className="hero-content">

//           <div className="hero-left">

//             <span className="hero-tag">
//               NISS Software Solutions
//             </span>

//             <h1>
//               Smart Digital Solutions <br />
//               For <span>Modern Businesses</span>
//             </h1>

//             <p>
//               We build modern websites, mobile apps,
//               marketing systems, automation platforms,
//               branding solutions, and business software.
//             </p>

//           </div>

//           <div className="hero-right">
//             <div className="hero-image-card">
//               <img src={Software} alt="Software" />
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* SERVICES */}
//       <section className="services-section">

//         <div className="section-heading">
//           <span>Our Services</span>
//           <h2>Complete Digital Growth Solutions</h2>
//           <p>Premium business solutions for your growth.</p>
//         </div>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               <h3>{service}</h3>
//               <p>Professional solutions for business growth.</p>
//             </div>
//           ))}
//         </div>

//       </section>

//       {/* ABOUT */}
//       <section className="about-section">

//         <div className="about-left">
//           <img src={Software} alt="About" />
//         </div>

//         <div className="about-right">
//           <span>About Company</span>
//           <h2>Transforming Businesses With Technology</h2>
//           <p>
//             NISS Software Solutions helps businesses grow
//             with modern websites, marketing, and automation.
//           </p>

//           <div className="about-stats">
//             <div>
//               <h3>100+</h3>
//               <p>Projects</p>
//             </div>

//             <div>
//               <h3>50+</h3>
//               <p>Clients</p>
//             </div>

//             <div>
//               <h3>99%</h3>
//               <p>Satisfaction</p>
//             </div>
//           </div>

//         </div>

//       </section>

//       {/* TEAM */}
//       <section className="team-section">

//         <div className="section-heading">
//           <span>Leadership</span>
//           <h2>Meet Our Team</h2>
//         </div>

//         <div className="team-grid">

//           <div className="team-card">
//             <img src={CEO} alt="CEO" />
//             <h3>Manish Kumar Singh</h3>
//             <span>CEO</span>
//             <p>Leading innovation and strategy.</p>
//           </div>

//           <div className="team-card">
//             <img src={CFO} alt="CFO" />
//             <h3>KR Roushan</h3>
//             <span>CFO</span>
//             <p>Managing finance and operations.</p>
//           </div>

//         </div>

//       </section>

//       {/* CTA */}
//       <section className="cta-section">

//         <h2>Ready To Grow Your Business?</h2>
//         <p>Let’s build something powerful together.</p>

//         <button>Contact Us</button>

//       </section>

//       <Footer />

//       <Chatboat />
//       <WhatsAppButton />

//     </div>
//   );
// };

// export default About;





import React from "react";
import "./About.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Chatboat from "../Chatboat/Chatboat";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaGoogle,
  FaYoutube,
  FaBullhorn,
  FaPaintBrush,
  FaShoppingCart,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

import MarvVideo2 from "../marvv3.mp4";
import Software from "../Software.jfif";

import CEO from "../Manish.jpeg";
import CFO from "../N.jpeg";

const services = [
  {
    title: "Website Development",
    icon: <FaCode />,
    color: "#4a90e2",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    color: "#ff6b6b",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    color: "#20c997",
  },
  {
    title: "Google Ads",
    icon: <FaGoogle />,
    color: "#4285F4",
  },
  {
    title: "YouTube Ads",
    icon: <FaYoutube />,
    color: "#ff0000",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
    color: "#9b59b6",
  },
  {
    title: "Graphic Designing",
    icon: <FaPaintBrush />,
    color: "#f39c12",
  },
  {
    title: "Branding",
    icon: <FaLaptopCode />,
    color: "#1abc9c",
  },
  {
    title: "E-Commerce Setup",
    icon: <FaShoppingCart />,
    color: "#e67e22",
  },
  {
    title: "Business Automation",
    icon: <FaRobot />,
    color: "#2ecc71",
  },
];

const About = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src={MarvVideo2} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">
              NISS Software Solutions
            </span>

            <h1 className="hero-head">
              Smart Digital Solutions <br />
              For <span>Modern Businesses</span>
            </h1>

            <p>
              We build modern websites, mobile apps,
              marketing systems, automation platforms,
              branding solutions, and business software.
            </p>

            <div className="hero-buttons">
              <button>Get Started</button>
              <button className="secondary-btn">
                Explore Services
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <img src={Software} alt="Software" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="section-heading">
          <span>Our Services</span>
          <h2>Complete Digital Growth Solutions</h2>
          <p>
            Premium business solutions for your growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-icon"
                style={{ background: service.color }}
              >
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>
                Professional digital solutions designed
                for business growth and online success.
              </p>

              <button className="service-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-left">
          <img src={Software} alt="About" />
        </div>

        <div className="about-right">
          <span>About Company</span>

          <h2>
            Transforming Businesses With Technology
          </h2>

          <p>
            NISS Software Solutions helps businesses
            grow with modern websites, marketing,
            branding, and automation systems.
          </p>

          <div className="about-stats">
            <div>
              <h3>100+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Clients</p>
            </div>

            <div>
              <h3>99%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="section-heading">
          <span>Leadership</span>
          <h2>Meet Our Team</h2>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <img src={CEO} alt="CEO" />

            <h3>Manish Kumar Singh</h3>

            <span>CEO</span>

            <p>
              Leading innovation and business strategy.
            </p>
          </div>

          <div className="team-card">
            <img src={CFO} alt="CFO" />

            <h3>KR Roushan</h3>

            <span>CFO</span>

            <p>
              Managing finance and company operations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready To Grow Your Business?</h2>

        <p>
          Let’s build something powerful together.
        </p>

        <button>Contact Us</button>
      </section>

      <Footer />

      <Chatboat />
      <WhatsAppButton />
    </div>
  );
};

export default About;