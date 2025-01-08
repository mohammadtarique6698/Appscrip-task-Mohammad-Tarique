import React, { useState } from "react";
import Image from "next/image";

import Image1 from "../../../../public/Images/Image1.webp";
import Favourite from "../../../../public/Images/favourite.svg";
import RedFavourite from "../../../../public/Images/redfavourite.svg";

const ProductDisplay = ({
  productName = "PPXOC Milkyway dress in pressed flowers",
  productDescription = "Sign in or Create an account to see pricing",
}) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClickOnFavourite = (e) => {
    e.stopPropagation();
    setIsFavourite((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        border: "1px solid #e5e5e5",
        borderRadius: "1.5rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          height: "12rem",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={Image1}
          alt={productName}
          width={300}
          height={398}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "1.5rem",
          }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          textAlign: "left",
          padding: "0.5rem",
          width: "100%",
        }}
      >
        <h6
          style={{
            fontSize: "1.13rem",
            color: "#252020",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          {productName}
        </h6>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.88rem",
              color: "#878691",
            }}
          >
            <span style={{ textDecoration: "underline" }}>Sign In</span>{" "}
            {productDescription}
          </p>
          <div
            onClick={handleClickOnFavourite}
            style={{
              padding: "0.25rem",
              cursor: "pointer",
            }}
          >
            {isFavourite ? (
              <Image src={RedFavourite} alt="icon" />
            ) : (
              <Image src={Favourite} alt="icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
