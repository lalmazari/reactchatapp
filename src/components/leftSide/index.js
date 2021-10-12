import React, { useState } from "react";
import useLogin from "../../hooks/user";
import UserSearch from "./UserSearch";
import UserList from "./UserList";
import Settings from "./Settings";

export default function LeftSide(){
    const { users, selectUser } = useLogin();
    const [friendsList, setfriendsList] = useState(users);
  
    const search = (filter) => {
      if (filter) {
        let friendsList = users.filter((user) =>
          `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter)
        );
        setfriendsList(friendsList);
        selectUser(friendsList[0]);
      } else {
        setfriendsList(users);
        selectUser(users[0]);
      }
    };

    return(
        <div className='left-side'>
            <UserSearch searchHandler={search}/>
            <UserList  friends={friendsList}/>
            <Settings />
        </div>
    )
}