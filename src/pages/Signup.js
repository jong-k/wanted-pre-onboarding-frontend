import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../hooks/api";

const Signup = () => {
  const [showErr, setShowErr] = useState("π");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validInput, setValidInput] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowErr("π");
    // μ΄λ©μΌ λ° λΉλ°λ²νΈ μ ν¨μ± κ²μ¦
    if (
      email.includes("@") &&
      password.length >= 8 &&
      passwordConfirm.length >= 8
    )
      setValidInput(true);
    else setValidInput(false);
  }, [email, password, passwordConfirm]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === "" && passwordConfirm.trim() === "") {
      setShowErr("πλΉλ°λ²νΈμλ κ³΅λ°±μ΄ λ€μ΄κ°λ©΄ μλ©λλ€");
      return;
    }
    if (password !== passwordConfirm) {
      setShowErr("π€λΉλ°λ²νΈκ° μΌμΉνμ§ μμ΅λλ€");
      return;
    }

    signup(email, password).then((result) => {
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      if (result.error) {
        alert(result.message);
      } else {
        alert("νμ κ°μμ΄ μλ£λμμ΅λλ€");
        navigate("/");
      }
    });
  };

  return (
    <main className="page">
      <section className="signup">
        <article className="header">
          <h2>νμκ°μ</h2>
          <p>{showErr}</p>
        </article>
        <article className="board">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="email">μ΄λ©μΌ</label>
            <input
              type="email"
              placeholder="@ ν¬ν¨"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">λΉλ°λ²νΈ</label>
            <input
              type="password"
              placeholder="8μ μ΄μ"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="passConfirm">λΉλ°λ²νΈ νμΈ</label>
            <input
              type="password"
              placeholder="8μ μ΄μ"
              id="passConfirm"
              name="passConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            <button type="submit" disabled={!validInput}>
              κ³μ  μμ±
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Signup;
