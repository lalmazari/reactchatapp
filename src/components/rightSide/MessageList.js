import React from "react";
import useLogin from "../../hooks/user";

export default function MessageList(props){
    const { selectedUser } = useLogin();
    

    return(
        <div className='message-list'>
            <h5>Message List</h5>
        </div>
    )
}