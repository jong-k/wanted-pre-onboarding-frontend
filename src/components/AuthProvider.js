import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [onLogin, setOnLogin] = useState(localStorage.getItem("accessToken"));

  return (
    <AuthContext.Provider value={{ onLogin, setOnLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
