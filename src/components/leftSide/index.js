import React, { useState } from "react";
import useLogin from "../../hooks/user";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import Settings from "./Settings";

export default function LeftSide(){

    return(
        <div className='left-side'>
            <UserSearch />
            <UserList  />
            <Settings />
        </div>
    )
}