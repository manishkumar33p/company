import React from "react";
import "./Services.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Niss72 from "../niss72.mp4";
import Software from "../Software.jfif";

const services = [
  {
    title: "Website Development",
    description:
      "Modern responsive business websites, portfolios, corporate sites, and dynamic web applications.",
    icon: "🌐",
  },

  {
    title: "App Development",
    description:
      "Android, iOS, and cross-platform mobile application development with modern UI/UX.",
    icon: "📱",
  },

  {
    title: "SEO Optimization",
    description:
      "Improve Google rankings, website traffic, and online visibility using advanced SEO strategies.",
    icon: "🚀",
  },

  {
    title: "Google Ads",
    description:
      "High-converting Google Ads campaigns for leads, traffic, and business growth.",
    icon: "📈",
  },

  {
    title: "YouTube Ads",
    description:
      "Professional YouTube video advertising campaigns for brand awareness and sales.",
    icon: "🎥",
  },

  {
    title: "Social Media Marketing",
    description:
      "Instagram, Facebook, LinkedIn, and social media growth marketing services.",
    icon: "📲",
  },

  {
    title: "Graphic Designing",
    description:
      "Creative logo design, social media creatives, posters, banners, and branding assets.",
    icon: "🎨",
  },

  {
    title: "Branding",
    description:
      "Complete business branding solutions to build trust and premium identity.",
    icon: "⭐",
  },

  {
    title: "E-commerce Setup",
    description:
      "Complete online store setup with payment gateway and product management.",
    icon: "🛒",
  },

  {
    title: "Business Automation",
    description:
      "CRM systems, ERP software, automation dashboards, and workflow management solutions.",
    icon: "⚙️",
  },
];

const Services = () => {
  return (
    <div className="services-container">

      <Navbar />

      {/* HERO SECTION */}

      <section className="services-hero">

        <video className="services-video" autoPlay loop muted>
          <source src={Niss72} type="video/mp4" />
        </video>

        <div className="services-overlay"></div>

        <div className="services-hero-content">

          <div className="services-left">

            <span className="services-tag">
              NISS Digital Solutions
            </span>

            <h1 className="hero-head">
              Powerful Digital Services
              For <span>Modern Businesses</span>
            </h1>

            <p>
              We help startups and companies grow with powerful digital
              services including website development, app development,
              marketing, branding, automation, and business solutions.
            </p>

          </div>

          <div className="services-right">

            <div className="services-image-card">
              <img src={Software} alt="Services" />
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES GRID */}

      <section className="services-section">

        <div className="services-heading">

          <h2>Our Services</h2>

          <p>
            Premium digital solutions designed to grow your business faster.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Explore Service
              </button>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
};

export default Services;