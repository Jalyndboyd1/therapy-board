import React, { useState } from 'react'
import './css/CalendarDay.css'
// MODAL IMPORTS
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function CalendarDay({ day, month, isAvailable, isBooked, isUnavailable }) {
    // handle modal state
    const [open, setOpen] = useState(false);
    // modal methods
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // Modal Style Object
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='calendarDay' onClick={handleOpen}>
            {isAvailable && <p className='calendarDay__available'>{day}</p>}
            {isUnavailable && <p className='calendarDay__isUnavailable'>{day}</p>}
            {isBooked && <p className='calendarDay__isBooked'>{day}</p>}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {day} Day of {month}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Appointment Times Seen As Below
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default CalendarDay