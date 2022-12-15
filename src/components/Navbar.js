import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "./AuthProvider";
import "../assets/main.scss";

const Navbar = () => {
  const { onLogin } = useContext(AuthContext);
  const [isLogged, setIsLogged] = useState(onLogin);
  const showButton = () => {
    return onLogin ? (
      <Link className="link" to="/">
        <button
          className="btn"
          onClick={() => {
            localStorage.clear();
          }}
        >
          로그아웃
        </button>
      </Link>
    ) : (
      <Link className="link" to="/signup">
        <button className="btn">회원가입</button>
      </Link>
    );
  };

  useEffect(() => {
    showButton();
  }, [isLogged]);

  return (
    <nav className="navbar">
      <section className="header">
        <Link className="link" to="/">
          <h2 className="logo">My ToDo😎</h2>
        </Link>
        {showButton()}
      </section>
    </nav>
  );
};

export default Navbar;
