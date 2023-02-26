import React from 'react'
import { auth, provider } from '../../firebase/config'
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { handleUserLogin, handleUserToken } from '../../features/reducers/userSlice'


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
        <div>
            <h1>In House</h1>
            <button onClick={handleSignIn}>Login</button>
        </div>
    )
}

export default Login