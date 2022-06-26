import { async } from '@firebase/util';
import React, { useState} from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
    } from 'firebase/auth';
import app, { authService } from '../myFirebase';


const Auth =  () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }
    }
    const onSubmit = async(event) =>{
        event.preventDefault();
        try {
            let data;
            const auth = getAuth()
            if(newAccount){
                data = await createUserWithEmailAndPassword(auth, email,password)
            } else{
                data = await signInWithEmailAndPassword(auth, email,password)
            }
            console.log(data)
        } catch (error){
            setError(error.message)
        }
    }
    const toogleAccount = ()=> setNewAccount(prev => !prev)
    const onSocialClick = async(event) =>{
        const name = event.target.name;
        let provider;
        if(name === "google"){
            provider =  new GoogleAuthProvider();
        } else if(name === "github"){
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(authService, provider)
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder='Email' required value={email} onChange={onChange}></input>
                <input type="password"  name="password" placeholder='password' required value={password} onChange={onChange}></input>
                <input type="submit" value={newAccount ? "new account" : "Log In"}></input>
                {error}
            </form>
            <div>
                <span onClick={toogleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
                <div>
                    <button onClick={onSocialClick} name='google'>Continue with Google</button>
                    <button onClick={onSocialClick} name='github'>Continue with Github</button>
                </div>
            </div>
        </div>
    )
}

export default Auth;