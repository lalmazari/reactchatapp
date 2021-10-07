import React from "react";

export default function Settings(){

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('selectedUser');
        localStorage.removeItem('outMessages');
        window.location.href='/';
    }



    return(
        <div>
            <form onSubmit={(e)=> logout(e)}>
                <button type='submit' className='logout-btn'> Log Out</button>
            </form>
        </div>
        
    )
}