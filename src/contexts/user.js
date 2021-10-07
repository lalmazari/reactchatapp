import React from "react";
 export const UserContext = React.createContext({
     user:null,
     users:null,
     selectedUser: null,
     signin: () => {},
     selectUser: () => {}
 })