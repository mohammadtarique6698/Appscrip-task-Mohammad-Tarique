"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../../public/Images/logo.svg";
import Search from "../../../../public/Images/search.svg";
import Favourite from "../../../../public/Images/favourite.svg";
import Lock from "../../../../public/Images/lock.svg";
import Profile from "../../../../public/Images/profile.svg";

import { IoIosArrowDown, IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={{ width: "100%" }}>
      {/* Second section with icons, language, and the menu */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "1.5rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* hamburger menu for mobile */}
            {isMobile && (
              <IoIosMenu
                size={24}
                style={{ cursor: "pointer" }}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            )}

            <Image src={Logo} width={36} height={36} alt="Main Logo" />

            <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Logo</p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "center",
                }}
              >
                <Link href="#">
                  <Image src={Search} alt="Search Icon" />
                </Link>
                <Link href="#">
                  <Image src={Favourite} alt="Favorite Icon" />
                </Link>
                <Link href="#">
                  <Image src={Lock} alt="Bag Icon" />
                </Link>

                {/* Profile and ENG icons on mobile */}
                {!isMobile && (
                  <>
                    <Link href="#">
                      <Image src={Profile} alt="Profile Icon" />
                    </Link>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.25rem",
                        alignItems: "center",
                      }}
                    >
                      <h6
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#252020",
                        }}
                      >
                        ENG
                      </h6>
                      <Link href="#">
                        <IoIosArrowDown />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu for mobile */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            right: "0",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "1rem",
            zIndex: 1000,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "1rem" }}>
              <Link href="#">
                <Image src={Profile} alt="Profile Icon" />
              </Link>
            </li>
            <li style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "0.25rem",
                  alignItems: "center",
                }}
              >
                <h6
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#252020",
                  }}
                >
                  ENG
                </h6>
                <Link href="#">
                  <IoIosArrowDown />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Menu section (separated) */}
      <div
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          paddingBottom: "2rem",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link href="#">
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.06rem",
                  color: "#252020",
                }}
              >
                SHOP
              </h5>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.06rem",
                  color: "#252020",
                }}
              >
                SKILLS
              </h5>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.06rem",
                  color: "#252020",
                }}
              >
                STORIES
              </h5>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.06rem",
                  color: "#252020",
                }}
              >
                ABOUT
              </h5>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.06rem",
                  color: "#252020",
                }}
              >
                CONTACT US
              </h5>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
