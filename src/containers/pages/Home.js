import React from "react";
import ActionItems from "../../Components/cards/ActionItems";
import Assessment from "../../Components/cards/Assessment";
import AvailableTimes from "../../Components/cards/AvailableTimes";
import GoalProgress from "../../Components/cards/GoalProgress";
import NextAppointment from "../../Components/cards/NextAppointment";
import "./css/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Next Appointment Date */}
      <NextAppointment />
      {/* Action Items Specific Appointment */}
      <ActionItems />
      {/* Goal Progress */}
      <GoalProgress />
      <Assessment />
      {/* Therapist Availabilities */}
      <AvailableTimes />
    </div>
  );
}

export default Home;
