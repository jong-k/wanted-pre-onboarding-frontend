import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../components/AuthProvider";
import { signin } from "../hooks/api";

const Home = () => {
  const { onLogin, setOnLogin } = useContext(AuthContext);
  const [showErr, setShowErr] = useState("๐");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validInput, setValidInput] = useState(false);

  const navigate = useNavigate();

  // Assignment3
  // ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ํ ํฐ์ด ์๋ ์ํ๋ก / ํ์ด์ง์ ์ ์ํ๋ค๋ฉด /todo ๊ฒฝ๋ก๋ก ๋ฆฌ๋ค์ด๋ ํธ
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/todo");
      return;
    }
    // ๋ก๊ทธ์์ ์งํ ๋ก์ปฌ์คํ ๋ฆฌ์ง๊ฐ ๋น์์ง ์ํ๋ก ํ์ผ๋ก ๋ฆฌ๋ค์ด๋ ํธ๋๋ฉด ๋ก๊ทธ์์ ๋ฒํผ์ ํ์๊ฐ์ ๋ฒํผ์ผ๋ก ์ ํ
    setOnLogin(false);
  }, []);

  useEffect(() => {
    setShowErr("๐");
    // Assignment1
    // ์ด๋ฉ์ผ ๋ฐ ๋น๋ฐ๋ฒํธ ์ ํจ์ฑ ๊ฒ์ฆ
    // ๊ฒ์ฆ ํต๊ณผ ํด์ผ ๋ฒํผ ํ์ฑํ
    if (email.includes("@") && password.length >= 8) setValidInput(true);
    else setValidInput(false);
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();

    signin(email, password).then((result) => {
      setEmail("");
      setPassword("");
      if (result.access_token) {
        // Assignment2
        // ์๋ต๋ฐ์ access token์ ๋ก์ปฌ ์คํ ๋ฆฌ์ง์ ์ ์ฅ
        localStorage.setItem("accessToken", result.access_token);
        alert("๋ก๊ทธ์ธ์ ์ฑ๊ณตํ์ต๋๋ค");
        // ๋ก๊ทธ์ธ API๋ฅผ ํธ์ถํ๊ณ , ์ฌ๋ฐ๋ฅธ ์๋ต์ ๋ฐ์์ ๋ /todo ๊ฒฝ๋ก๋ก ์ด๋
        navigate("/todo");
      } else {
        alert("๋ก๊ทธ์ธ์ ์คํจํ์ต๋๋ค.");
      }
    });
  };

  return (
    <main className="page">
      <section className="login">
        <article className="header">
          <h2>๋ก๊ทธ์ธ</h2>
          <p>{showErr}</p>
        </article>
        <article className="board">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="email">์ด๋ฉ์ผ</label>
            <input
              type="email"
              placeholder="@ ํฌํจ"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">๋น๋ฐ๋ฒํธ</label>
            <input
              type="password"
              placeholder="8์ ์ด์"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={!validInput}>
              ๋ก๊ทธ์ธ
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Home;
