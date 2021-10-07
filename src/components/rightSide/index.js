import React from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";


export default function RightSide(){

    return(
        <div className='right-side'>
            <Header />
            <MessageList />
            <MessageInput />


        </div>
    )
}