import React from "react";
import { Redirect  } from "react-router-dom";
import LeftSide from "../components/leftSide";
import RightSide from "../components/rightSide";
import useLogin from "../hooks/user";

export default function Chat(){
    const { user } = useLogin();

    if (!user) return <Redirect to="/login" />
    else 
    return (
        <div className="chat-container">

            <LeftSide />
            <RightSide />
        </div>
    );
}
