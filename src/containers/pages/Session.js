import React, { useEffect, useState } from 'react'
import './css/Session.css'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { userObject } from "../../features/reducers/userSlice";
import { useSelector } from 'react-redux'
import { doc, updateDoc, collection, onSnapshot, getDocs, arrayUnion, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config'


function Session() {
    const [inputValue, setInputValue] = useState('')
    const [messages, setMessages] = useState([])

    const user = useSelector(userObject)

    useEffect(() => {
        const subcollectionRef = collection(doc(db, 'users', user.uid), 'sessionMessages');
        const unsubscribe = onSnapshot(subcollectionRef, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setMessages(doc.data().messages)
            });
        }, (error) => {
            console.error(error);
        });
        return unsubscribe
    }, [user.uid])


    const createId = () => {
        const idLength = 10;

        const idChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        let randomId = '';

        for (let i = 0; i < idLength; i++) {
            randomId += idChars.charAt(Math.floor(Math.random() * idChars.length));
        }

        return randomId
    }

    const createTimeStamp = () => {
        const currentDate = new Date();

        const localHours = currentDate.getHours();
        const localMinutes = currentDate.getMinutes();

        return `${localHours}:${localMinutes}`
    }

    const handleSend = async (e) => {
        e.preventDefault();
        // check if a doc exists and if not create add doc to DB with subCollection ref
        const subcollectionRef = collection(doc(db, 'users', user.uid), 'sessionMessages');

        const querySnapshot = await getDocs(subcollectionRef);
        if (querySnapshot.docs.length === 0) {
            await addDoc(subcollectionRef, {
                messages: arrayUnion({ message: inputValue, timestamp: createTimeStamp(), id: createId() })
            })
        }
        else {
            querySnapshot.forEach(async (doc) => {
                await updateDoc(doc.ref, { messages: arrayUnion({ message: inputValue, timestamp: createTimeStamp(), id: createId() }) })
            });
        }
        setInputValue('')
    }

    return (
        <div className='session'>
            <div className='session__messages'>
                {messages.length > 0 ? messages.map((message) => {
                    // key will later be message id
                    return <p key={message.id} className='session__message'>
                        {message.message}
                    </p>
                }) : 'Let your therapist know how things are!'}
            </div>
            <div className='session__input'>
                <textarea placeholder='Send Message..' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <ArrowUpwardRoundedIcon className='send' onClick={(e) => handleSend(e)} />
            </div>
        </div>
    )
}

export default Session