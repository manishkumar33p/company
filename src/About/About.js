import React from "react";
import "./About.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Chatboat from "../Chatboat/Chatboat";
import MarvVideo2 from "../marvv3.mp4";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

import Software from "../Software.jfif";

/* TEAM PHOTOS */
import CEO from "../Manish.jpeg";
import CFO from "../N.jpeg";

const services = [
  "Website Development",
  "App Development",
  "SEO Optimization",
  "Google Ads",
  "YouTube Ads",
  "Social Media Marketing",
  "Graphic Designing",
  "Branding",
  "E-Commerce Setup",
  "Business Automation",
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
              Smart Digital Solutions
              For <span>Modern Businesses</span>
            </h1>

            <p>
              We build modern websites, mobile apps,
              marketing systems, automation platforms,
              branding solutions, and business software
              for startups and enterprises.
            </p>

            <div className="hero-buttons">

              <button>
                Get Started
              </button>

              <button className="secondary-btn">
                Explore Services
              </button>

            </div>

          </div>

          <div className="hero-right">

            <div className="hero-image-card">
              <img src={Software} alt="NISS" />
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services-section">

        <div className="section-heading">

          <span>Our Services</span>

          <h2>
            Complete Digital Growth Solutions
          </h2>

          <p>
            Premium business solutions designed
            to grow your brand digitally.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <h3>{service}</h3>

              <p>
                Professional and scalable solutions
                customized for your business growth.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-section">

        <div className="about-left">

          <img src={Software} alt="About NISS" />

        </div>

        <div className="about-right">

          <span>About Company</span>

          <h2>
            Transforming Businesses Through
            Technology & Innovation
          </h2>

          <p>
            NISS Software Solutions helps businesses
            build strong online presence through
            modern websites, digital marketing,
            automation systems, and branding solutions.
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

      {/* LEADERSHIP */}

      <section className="team-section">

        <div className="section-heading">

          <span>Leadership Team</span>

          <h2>
            Meet Our Leadership
          </h2>

        </div>

        <div className="team-grid">

          {/* CEO */}

          <div className="team-card">

            <img src={CEO} alt="CEO" />

            <h3>
              Manish Kumar Singh
            </h3>

            <span>Chief Executive Officer (CEO)</span>

            <p>
              Leading innovation, growth strategy,
              and digital transformation at NISS.
            </p>

          </div>

          {/* CFO */}

          <div className="team-card">

            <img src={CFO} alt="CFO" />

            <h3>
              KR Roushan
            </h3>

            <span>Chief Financial Officer (CFO)</span>

            <p>
              Managing business operations,
              finance strategy, and company growth.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>
          Ready To Grow Your Business?
        </h2>

        <p>
          Let’s build something powerful together.
        </p>

        <button>
          Contact Us
        </button>

      </section>

      <Footer />
  <Chatboat /> 
    <WhatsAppButton />
    </div>
  );
};

export default About;