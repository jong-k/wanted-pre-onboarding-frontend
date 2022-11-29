import "./index.scss";
import { FaBloggerB, FaGithub } from "react-icons/fa";
import Logo from "../../components/FullyCharged";

function Home() {
  return (
    <div className="home">
      <Logo className="logo" />
      <h2 className="title">안녕하세요, 김종한입니다</h2>
      <h3 className="text">멋진 앱을 만들고 싶은 프론트엔드 개발자</h3>
      <h3 className="sub-text">호기심이 많고 최신 기술에 관심이 많음</h3>
      <div className="sns-container">
        <a
          className="link"
          href="https://github.com/jong-k"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="link"
          href="https://ggarden.tistory.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaBloggerB />
        </a>
      </div>
    </div>
  );
}
export default Home;
