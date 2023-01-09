import React from 'react'

function GoalProgress() {
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
        width: "310px"
      };
  return (
    <div className='goalProgress' style={cardStyle}>Goal Progress</div>
  )
}

export default GoalProgress