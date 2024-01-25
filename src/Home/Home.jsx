import { useRef } from "react";
import Avatar from "../img/avat.png";
import files from "../img/icon/file.svg";

import "./Home.css";

const Home = () => {
  const btnRef = useRef(null);

  const handeleClick = () => {
    const cvRes = document.createElement("a");
    cvRes.href = "CV.pdf";
    cvRes.download = "Javohir CV";

    cvRes.click();
  };

  return (
    <div className="Home">
      <div className="Home-child-left">
        <h1 className="title">
          My name is <span className="title-child">Javokhir</span>, I'm a
          <p className="title-child-s">frontend developer</p>
        </h1>
        <p className="title-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sint
          aliquam similique cum itaque necessitatibus debitis adipisci tempora
          distinctio totam? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corporis ex at ad voluptate ratione minima exercitationem hic
          deleniti tempore ipsum.
        </p>
        <button
          ref={btnRef}
          onClick={handeleClick}
          className="btn"
          title="Click qilish orqali CV yuklanadi !"
        >
          <img src={files} alt="" /> CV Click
        </button>
      </div>
      <div className="Home-child-right">
        <img src={Avatar} alt="" />
      </div>
    </div>
  );
};

export default Home;
