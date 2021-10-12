import React from "react";

export default function UserSearch(props){
    const searchHandler = props.searchHandler;
    const handleSearch = (e) => {
        e.preventDefault();
        searchHandler(e.target.value);
    }

    return(
        <div className='user-search'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className='search' 
                    type='search' 
                    name='search'
                    placeholder='Search'
                    onChange={(e) => handleSearch(e)}
                    
                    />
            </form>
        </div>
    )
}