import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const FilterSection = ({ filterName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      style={{
        paddingRight: "1rem",
        transition: "opacity 0.5s ease",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={toggleExpand}
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
            {filterName}
          </label>

          {/* Arrow Icon (Up/Down based on state) */}
          {isExpanded ? (
            <FaAngleUp
              size={16}
              style={{ marginLeft: "0.5rem", color: "#252020" }}
            />
          ) : (
            <FaAngleDown
              size={16}
              style={{ marginLeft: "0.5rem", color: "#252020" }}
            />
          )}
        </div>

        <p style={{ display: "block" }}>All</p>

        {/* Show this section only when expanded */}
        {isExpanded && (
          <div>
            <span
              style={{
                textDecoration: "underline",
                color: "#BFC8CD",
                paddingTop: "1rem",
                display: "block",
                cursor: "pointer",
              }}
            >
              Unselect All
            </span>

            {/* Options */}
            <div>
              <label
                style={{
                  fontSize: "0.8rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                  marginTop: "1.5rem",
                }}
              >
                <input
                  type="checkbox"
                  name="Men"
                  style={{
                    marginRight: "0.5rem",
                    cursor: "pointer",
                  }}
                />
                Men
              </label>
              <label
                style={{
                  fontSize: "0.8rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="Women"
                  style={{
                    marginRight: "0.5rem",
                    cursor: "pointer",
                  }}
                />
                Women
              </label>
              <label
                style={{
                  fontSize: "0.8rem",
                  display: "block",
                  marginBottom: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  name="Baby & Kids"
                  style={{
                    marginRight: "0.5rem",
                    cursor: "pointer",
                  }}
                />
                Baby & Kids
              </label>
            </div>
          </div>
        )}

        {/* Lower HR Line */}
        <hr style={{ border: "1px solid #E5E5E5", margin: "1rem 0" }} />
      </div>
    </div>
  );
};

export default FilterSection;
