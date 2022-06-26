import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../myFirebase';

const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () =>{
        authService.signOut();
        navigate("/");
    }
    return(
        <>
        <button onClick={onLogOutClick}>Log Out</button>
        <h1> gd</h1>
        </>
    )
}

export default Profile;