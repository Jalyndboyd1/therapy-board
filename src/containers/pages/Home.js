import React from "react";
import NextAppointment from "../../Components/cards/NextAppointment";
import "./css/Home.css"

function Home() {
  return (
    <div className="home">
      {/* Hold Different Components */}
      <NextAppointment />
      <NextAppointment />
      <NextAppointment />
      <NextAppointment />
      <NextAppointment />
      {/* Next Appointment Date */}
      {/* Action Items Specific Appointment */}
      {/* Goal Progress */}
      {/* Therapist Availabilities */}
    </div>
  );
}

export default Home;
