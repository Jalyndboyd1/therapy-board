import React from 'react'
import { auth, provider } from '../../firebase/config'
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { handleUserLogin, handleUserToken } from '../../features/reducers/userSlice'
import "./css/login/Login.css"
import logo from '../../in-house-high-resolution-color-logo.png'

function Login() {
    const dispatch = useDispatch()

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                dispatch(handleUserToken(token))
                dispatch(handleUserLogin(user))
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className='login'>
            <img src={logo} alt='' />
            <div onClick={handleSignIn} className='login__google'>
                Login with Google
                <img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt='' />
            </div>
        </div>
    )
}

export default Login