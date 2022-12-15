import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} <span>My Todo</span> Created by{" "}
        <a href="https://ggarden.tistory.com/">김종한</a>
      </p>
    </footer>
  );
};

export default Footer;
