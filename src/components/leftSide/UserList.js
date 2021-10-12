import React from "react";
import useLogin from "../../hooks/user";
import { IoPersonCircle } from "react-icons/io5";



export default function UserList(props){
    const { users, selectedUser, selectUser } = useLogin();

    const handleClick = (id) => {
      const selectedUser = users.find((user) => user.id === id);
      if (selectedUser) selectUser(selectedUser);
      else selectUser(null);
    };

    return(
        <div className='user-list'>
           <ul>
                {props.friends ? (
                props.friends.map((friend) => (
                    <li className='userList'
                    className={friend.id === selectedUser?.id ? "active" : null}
                    key={friend.id}
                    onClick={() => handleClick(friend.id)}
                    >
                    <div className='user-name'>
                       <div className='photo'> <IoPersonCircle /> </div>
                        <div className="name">{`${friend.first_name} ${friend.last_name}`}</div>

                    </div>
                    </li>
                ))
                ) : (
                <li>No User Found</li>
                )}
            </ul>
        </div>
    )
}