import { ImGithub, ImBlogger } from "react-icons/im";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "Github",
    icon: <ImGithub />,
    link: "https://github.com/jong-k",
  },
  {
    title: "Blog",
    icon: <ImBlogger />,
    link: "https://ggarden.tistory.com/",
  },
];
