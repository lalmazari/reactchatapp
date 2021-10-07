import React, { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/theme";
import { UserContext } from "./contexts/user";
import { users } from "./MockUser.json"
import Routes from "./routes";

import "./App.css";

function App() {
  // UserContext
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const signin = (user) => {
    setUser(user);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const loadUser = () => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
  };

  const loadSelectedUser = () => {
    let selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      selectedUser = JSON.parse(selectedUser);
      setSelectedUser(selectedUser);
    }
  };

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (selectedUser)
      localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
  }, [selectedUser]);

  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const loadTheme = () => {
    let theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    else setTheme("light");
  };

  useEffect(() => {
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    loadUser();
    loadSelectedUser();
    loadTheme();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, selectedUser, users, signin, selectUser }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div theme={theme}>
          <Routes />
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
