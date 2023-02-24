import React, { useState } from 'react'
import './css/Session.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function Session() {
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState([])

    const handleSend = (e) => {
        e.preventDefault();
        if(inputValue){
            try {
                setMessages([...messages, {
                    message: inputValue
                }])
            }
            catch {
                console.log('Error')
                // Use Popup to display error in friendly way to user
            }
        }
    }

    return (
        <div className='session'>
            {/* messages container */}
            <div className='session__messages'>
                {messages.length > 0 ? messages.map((message) => {
                    // key will later be message id
                    return <p key={Math.floor(Math.random())}>
                        {message.message}
                    </p>
                }) : 'Let your therapist know how things are!'}
            </div>
            <div className='session__input'>
                <input placeholder='Send Message..' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <ArrowUpwardRoundedIcon className='send' onClick={(e) => handleSend(e)} />
            </div>
        </div>
    )
}

export default Session