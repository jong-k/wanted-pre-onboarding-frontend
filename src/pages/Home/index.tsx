import profileImg from "../../assets/react.svg";
import { AboutData } from "../../data/AboutData";

const welcomeText = `안녕하세요, 김종한입니다`;
const aboutText1 = "인터랙티브한 앱을 만들고 싶은 개발자";

const aboutText2 = "프론트엔드, 알고리즘에 관심";

const Home = () => {
  return (
    <div>
      <img src={profileImg} alt="Profile" />
      <h2>{welcomeText}</h2>
      <h3>{aboutText1}</h3>
      <h3>{aboutText2}</h3>
      <div></div>
    </div>
  );
};

export default Home;
