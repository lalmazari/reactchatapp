import React from "react";
import { IoSend } from "react-icons/io5";
export default function MessageInput(){

    return(
        <div className='message-input'>
            <form>
            <input className='messageInput' 
                    type='input' 
                    name='message-input'
                    placeholder='type'
                    
                    />
                <button type='submit' className='send-btn'><IoSend/></button>
            </form>
        </div>
    )
}