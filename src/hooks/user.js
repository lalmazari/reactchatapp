import { useContext } from "react";
import { UserContext } from "../contexts/user";

export default function useLogin(){
    const {user, users, selectedUser, selectUser, signin} = useContext(UserContext);
    return{
        user, users, selectedUser, selectUser, signin
    }
}