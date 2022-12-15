import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../hooks/api";

const Signup = () => {
  const [showErr, setShowErr] = useState("😊");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validInput, setValidInput] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowErr("😊");
    // 이메일 및 비밀번호 유효성 검증
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
      setShowErr("😅비밀번호에는 공백이 들어가면 안됩니다");
      return;
    }
    if (password !== passwordConfirm) {
      setShowErr("🤔비밀번호가 일치하지 않습니다");
      return;
    }

    signup(email, password).then((result) => {
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      if (result.error) {
        alert(result.message);
      } else {
        alert("회원 가입이 완료되었습니다");
        navigate("/");
      }
    });
  };

  return (
    <main className="page">
      <section className="signup">
        <article className="header">
          <h2>회원가입</h2>
          <p>{showErr}</p>
        </article>
        <article className="board">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              placeholder="@ 포함"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              placeholder="8자 이상"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="passConfirm">비밀번호 확인</label>
            <input
              type="password"
              placeholder="8자 이상"
              id="passConfirm"
              name="passConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            <button type="submit" disabled={!validInput}>
              계정 생성
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Signup;
