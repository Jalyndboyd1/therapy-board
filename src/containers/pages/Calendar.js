import "./css/Calendar.css"
import CalendarDay from "../../Components/CalendarDay"

function Calendar() {
    const currentMonthDays = []
    const now = new Date();
    const currentMonth = now.getMonth();
    const daysInMonth = new Date(now.getFullYear(), currentMonth + 1, 0).getDate();
    for (let index = 0; index < daysInMonth; index++) {
        currentMonthDays.push(index + 1)
    }

    return (
        <div className="calendar">
            {/* Fixed Box in the center */}
            <div className="calendar__days">
                {currentMonthDays.map((day) => {
                    return <CalendarDay day={day} />
                })}
            </div>
            {/* Calendar Day components will render based on amount of days in month */}
        </div>
    )
}

export default Calendar