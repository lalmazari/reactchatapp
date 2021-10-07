import React from "react";
import { Redirect } from "react-router-dom";
import useLogin from "../hooks/user";
import {v4 as uuid } from "uuid";

export default function Login(){
    const {user, signin} = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        const user = {
            id: uuid(),
            userName: target.userName.value,
            firstName: target.firstName.value,
            lastName:target.lastName.value
        };

        signin(user);
        <Redirect to='/chat' />
    };

    if (user) return <Redirect to='/chat' />;
    else
        return (
            <div className="login-container">
                <form id='login-form'
                    onSubmit={(e) => handleSubmit(e)}
                >

                   <h2>Login to your account</h2>

                    <input 
                        className="login-input"
                        name='userName'
                        type="text"
                        placeholder="User Name"

                    />
                    <input
                        className="login-input" 
                        name='firstName'
                        type="text"
                        placeholder="First Name"
            
                    />
                    <input
                        className="login-input"
                        name='lastName' 
                        type="text"
                        placeholder="Last Name"
    
                    />
                    <button
                        className="login-btn"
                        type="submit"
                        >
                        Login
                    </button>
                </form>
            </div>
        );
}