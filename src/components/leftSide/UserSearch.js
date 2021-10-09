import React from "react";

export default function UserSearch(){

    return(
        <div className='user-search'>
            <form>
                <input className='search' 
                    type='search' 
                    name='search'
                    placeholder='Search'
                    
                    />
            </form>
        </div>
    )
}