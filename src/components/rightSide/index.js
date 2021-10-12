import React, { useState, useEffect } from "react";
import useLogin from "../../hooks/user";
import Header from "./Header";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

import { v4 as uuid } from "uuid";



export default function RightSide(){

    

    return(
        <div className='right-side'>
            <Header />
            <MessageList />
            <MessageInput />


        </div>
    )
}