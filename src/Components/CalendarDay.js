import React from 'react'
import './css/CalendarDay.css'

function CalendarDay({ day, isAvailable, isBooked }) {
    return (
        <div className='calendarDay'>
            <p>{day}</p>
        </div>
    )
}

export default CalendarDay