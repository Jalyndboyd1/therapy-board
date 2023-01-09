import React from "react";

function ActionItems() {
  const cardStyle = {
    padding: "10px",
    borderRadius: "10px",
    // border: "1px solid",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    height: "200px",
    margin: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "750px"
  };

  return (
    <div className="actionItems" style={cardStyle}>
      <h3
        style={{
          fontWeight: "300",
          fontSize:'1.7rem'
        }}
      >
        Prev Appointment Action Items
      </h3>
    </div>
  );
}

export default ActionItems;
