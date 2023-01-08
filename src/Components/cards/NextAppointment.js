import React from "react";

function NextAppointment() {
  const cardStyle = {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    height: "200px",
    margin: "1rem",
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  };

  return (
    <div className="appointment" style={cardStyle}>
      <h4 style={{ color: "#a9aadd" }}> Your Next Appointment</h4>
      <strong style={{
        margin:'16px'
      }}>{'January'}</strong>
      <h1 style={{
        fontSize:'3rem',
        fontWeight:'300'
      }}>{'27th'}</h1>
      <div>on Monday</div>
    </div>
  );
}

export default NextAppointment;
