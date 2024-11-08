import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Custom hook for accessing UserContext
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap around your app and provide user data to components
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data, typically called after a successful login
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out the user, clearing their data
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
