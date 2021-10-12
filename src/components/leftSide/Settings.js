import React from "react";


import { IoLogOutOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";





export default function Settings(){

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('selectedUser');
        localStorage.removeItem('outMessages');
        window.location.href='/';
    }



    return(
        <div className='user-settings'>
            <form >
                <button type='submit' className='settings-btn'><IoMoon /></button>
            </form>
            <form onSubmit={(e)=> logout(e)}>
                <button type='submit' className='settings-btn'><IoLogOutOutline /></button>
            </form>
        </div>
        
    )
}