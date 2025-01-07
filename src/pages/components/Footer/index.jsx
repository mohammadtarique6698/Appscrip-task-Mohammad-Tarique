"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import Gpay from "../../../../public/Images/payments/gpay.svg";
import MasterCard from "../../../../public/Images/payments/mastercard.svg";
import PayPal from "../../../../public/Images/payments/paypal.svg";
import Amex from "../../../../public/Images/payments/amex.svg";
import Applepay from "../../../../public/Images/payments/applepay.svg";
import Opay from "../../../../public/Images/payments/opay.svg";
import United_Logo from "../../../../public/Images/United_states.svg";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "2rem",
        width: "100%",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: isMobile ? "flex" : "grid",
          flexDirection: isMobile ? "column" : "initial",
          gridTemplateColumns: isMobile ? "none" : "repeat(2, 1fr)",
          textAlign: isMobile ? "center" : "",
          gap: "2rem",
        }}
      >
        {/* Newsletter Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "",
            textAlign: "left",
          }}
        >
          <h5
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Be the first to know
          </h5>
          <p style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>
            Sign up for updates from mettä muse.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail..."
              style={{
                padding: "0.75rem",
                flex: 1,
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                borderRadius: "0.25rem",
                transition: "background-color 0.2s",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr
          style={{
            border: "1px solid #333",
            display: isMobile ? "block" : "none",
          }}
        />

        {/* Contact and Currency Section */}
        <div>
          <h5
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Contact Us
          </h5>
          <p style={{ fontSize: "0.875rem", marginBottom: "1rem" }}>
            +44 221 133 5360
          </p>
          <p style={{ fontSize: "0.875rem", marginBottom: "1.5rem" }}>
            customercare@mettamuse.com
          </p>
          <h5
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Currency
          </h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: isMobile ? "center" : "",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              <Image src={United_Logo} alt="united_state" />
              {"."}
              <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                USD
              </span>
            </p>
          </div>
          <p style={{ fontSize: "0.875rem" }}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr style={{ borderColor: "#333", margin: "1.5rem 0" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ marginLeft: "3rem", marginRight: "3rem" }}>
              <h2
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                mettā muse
              </h2>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                About Us
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Orders & Shipping
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Join/Login as a Seller
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Payment & Pricing
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Return & Refunds
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                FAQs
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Privacy Policy
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Terms & Conditions
              </p>
            </div>

            <div>
              <h5 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
                Quick Links
              </h5>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Order & Shipping
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Join/Login as Seller
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Payment & Pricing
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Return & Refunds
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                FAQs
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Privacy Policy
              </p>
              <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>

        {/* Second half for social icons */}
        <div style={{ marginLeft: "1rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>Follow Us</h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                height: "2rem",
                width: "2rem",
                borderRadius: "1rem",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaInstagram
                style={{ cursor: "pointer", borderRadius: "white" }}
              />
            </div>
            <div
              style={{
                height: "2rem",
                width: "2rem",
                borderRadius: "1rem",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoLogoLinkedin style={{ cursor: "pointer" }} />
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontWeight: "bold" }}>mettā muse Accepts</p>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <Image src={Gpay} alt="Payment Icon" />
              <Image src={MasterCard} alt="Payment Icon" />
              <Image src={PayPal} alt="Payment Icon" />
              <Image src={Amex} alt="Payment Icon" />
              <Image src={Applepay} alt="Payment Icon" />
              <Image src={Opay} alt="Payment Icon" />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "1px solid #333",
          display: "block",
          marginTop: "1rem",
        }}
      />

      <div
        style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.75rem" }}
      >
        &copy; 2023 mettā muse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
