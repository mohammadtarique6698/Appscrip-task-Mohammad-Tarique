"use client";

import React, { useState, useEffect, Suspense } from "react";

import ProductDisplay from "@/pages/components/Product_Show";
import FilterSection from "@/pages/components/Filters";

import Image1 from "@/public/Images/Image.svg";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const featuredProductsGrid2 = [
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
  {
    productName: "PPXOC Milkyway dress in pressed flowers",
    productDescription: "or Create an account to see pricing",
    imageUrl: Image1,
  },
];

const dropDownOptions = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newest First", value: "price" },
  { label: "Popular", value: "popularity" },
  { label: "Price: Low to High", value: "popularity" },
  { label: "Price: High to Low", value: "popularity" },
];

const WebPLPWithFilterPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilterToggle = () => {
    setIsFilterVisible((prev) => !prev);
  };

  const getGridTemplateColumns = () => {
    if (windowWidth < 500) return "repeat(1, 1fr)";
    if (windowWidth < 750) return "repeat(2, 1fr)";
    if (isFilterVisible) return "repeat(3, 1fr)";
    return "repeat(4, 1fr)";
  };

  let style = {
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    color: "#252020",
    fontWeight: "normal",
    marginTop: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "40rem",
  };

  if (windowWidth <= 768) {
    style = {
      ...style,
      fontSize: "1.2rem",
      lineHeight: "1.4rem",
      marginTop: "0.5rem",
      marginBottom: "1rem",
      maxWidth: "15rem",
    };
  }

  if (windowWidth <= 480) {
    style = {
      ...style,
      fontSize: "1rem",
      lineHeight: "1.3rem",
      marginTop: "0.3rem",
      marginBottom: "0.5rem",
      maxWidth: "10rem",
    };
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: "1.5rem",
      }}
    >
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "3.75rem",
                letterSpacing: "0.06rem",
                color: "#252020",
                fontWeight: "normal",
                textTransform: "uppercase",
              }}
            >
              DISCOVER OUR PRODUCTS
            </p>
            <div
              style={{
                borderBottom: "1px solid #e5e5e5",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p style={style}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
                dolor.
              </p>
            </div>
          </div>

          {/* Sorting and Filter Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "3rem 0",
              borderBottom: "1px solid #e5e5e5",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexShrink: "1",
              }}
            >
              <h1
                style={{
                  fontSize: "1.13rem",
                  color: "#252020",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                3425 Items
              </h1>

              <div>
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#888792",
                    cursor: "pointer",
                  }}
                  onClick={handleFilterToggle}
                >
                  {isFilterVisible ? <FaAngleLeft /> : <FaAngleRight />}
                  {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
                </h3>
              </div>
            </div>

            {/* Dropdown */}
            <select
              style={{
                color: "#252020",
                fontWeight: "bold",
                textTransform: "uppercase",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {dropDownOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  style={{ margin: "1rem" }}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter and Products Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isFilterVisible ? "1fr 2fr" : "1fr",
              gap: "1.88rem",
              marginTop: "2rem",
              transition: "all 0.5s ease",
            }}
          >
            {/* Filters */}
            {isFilterVisible && (
              <div
                style={{
                  borderRight: "1px solid #E5E5E5",
                  paddingRight: "1rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    name="Customizable"
                    style={{
                      marginRight: "0.5rem",
                      cursor: "pointer",
                    }}
                  />
                  Customizable
                </label>
                <hr
                  style={{
                    border: "1px solid #E5E5E5",
                    margin: "1rem 0",
                    marginRight: "1rem",
                  }}
                />
                <FilterSection filterName="IDEAL FOR" />
                <FilterSection filterName="OCCASION" />
                <FilterSection filterName="WORK" />
                <FilterSection filterName="FABRIC" />
                <FilterSection filterName="SEGMENT" />
                <FilterSection filterName="SUITABLE FOR" />
                <FilterSection filterName="RAW MATERIALS" />
                <FilterSection filterName="PATTERN" />
              </div>
            )}

            {/* Products */}
            <div>
              <Suspense fallback={<div>Loading Products...</div>}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: getGridTemplateColumns(),
                    gap: "1.25rem",
                    marginBottom: "auto",
                    transition: "all 0.5s ease",
                  }}
                >
                  {featuredProductsGrid2.map((product, index) => (
                    <ProductDisplay
                      key={index}
                      productName={product.productName}
                      productDescription={product.productDescription}
                      imageUrl={product.imageUrl}
                    />
                  ))}
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPLPWithFilterPage;
