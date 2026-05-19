import React from "react";
import "./CompanyOverview.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import MarvVideo2 from "../marvv3.mp4";
import Software from "../Software.jfif";

const CompanyOverview = () => {
  return (
    <div className="company-page">

      <Navbar />

      {/* HERO SECTION */}

      <section className="company-hero">

        <video className="company-video" autoPlay loop muted>
          <source src={MarvVideo2} type="video/mp4" />
        </video>

        <div className="company-overlay"></div>

        <div className="company-hero-content">

          <div className="company-left">

            <span className="company-tag">
              NISS Software Solutions
            </span>

            <h1 className="hero-overview">
              Transforming Businesses Through
              <span> Smart Digital Solutions</span>
            </h1>

            <p>
              We create powerful websites, applications, marketing systems,
              automation platforms, and digital experiences that help
              businesses grow faster in the modern digital world.
            </p>

          </div>

          <div className="company-right">

            <div className="company-image-card">
              <img src={Software} alt="NISS Company" />
            </div>

          </div>

        </div>

      </section>

      {/* OVERVIEW SECTION */}

      <section className="company-overview-section">

        <div className="company-container">

          <div className="company-heading">

            <span>About Us</span>

            <h2>
              Complete Digital Solutions
              For Modern Businesses
            </h2>

            <p>
              NISS Software Solutions is a modern technology company
              providing website development, app development,
              digital marketing, branding, automation systems,
              and business growth solutions for startups,
              enterprises, and growing brands.
            </p>

          </div>

          {/* GRID */}

          <div className="company-grid">

            <div className="company-card">

              <h3>Who We Are</h3>

              <p>
                We are a team of developers, designers,
                marketers, and technology experts focused on
                creating high-quality digital products that
                improve business growth and customer engagement.
              </p>

            </div>

            <div className="company-card">

              <h3>Our Mission</h3>

              <p>
                Our mission is to deliver innovative,
                affordable, and scalable digital solutions
                that help businesses establish strong online
                presence and achieve long-term success.
              </p>

            </div>

            <div className="company-card">

              <h3>Our Vision</h3>

              <p>
                We aim to become one of India's leading
                digital technology companies by delivering
                future-ready solutions with modern technology
                and creative innovation.
              </p>

            </div>

            <div className="company-card">

              <h3>Why Choose Us</h3>

              <ul>

                <li>Modern UI/UX Design</li>

                <li>Fast Performance</li>

                <li>SEO Friendly Solutions</li>

                <li>Business Automation</li>

                <li>Affordable Pricing</li>

                <li>Dedicated Support</li>

              </ul>

            </div>

          </div>

          {/* STATS */}

          <div className="company-stats">

            <div className="stat-box">
              <h2>100+</h2>
              <p>Projects Completed</p>
            </div>

            <div className="stat-box">
              <h2>50+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="stat-box">
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-box">
              <h2>99%</h2>
              <p>Client Satisfaction</p>
            </div>

          </div>

          {/* SERVICES */}

          <div className="company-services">

            <h2>Our Services</h2>

            <div className="service-list">

              <span>Website Development</span>

              <span>App Development</span>

              <span>SEO Optimization</span>

              <span>Google Ads</span>

              <span>YouTube Ads</span>

              <span>Social Media Marketing</span>

              <span>Graphic Designing</span>

              <span>Branding</span>

              <span>E-commerce Setup</span>

              <span>Business Automation</span>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default CompanyOverview;