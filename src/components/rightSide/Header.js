import React, { Component} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";

import { IoEllipsisHorizontal } from "react-icons/io5";



export default function Header(){

    return(
        <div className='user-header'>
            <h3 className='user-name'>User Nane</h3>
            <button type='button' className='user-btn'><IoEllipsisHorizontal /></button>
        </div>
    )
}