import React from "react";
import { useRouter } from "../Hooks/useRouter";

const About = () => {
  const { navigate } = useRouter();

  const goMain = () => {
    navigate("/");
  };
  return (
    <div className="main">
      <h1>About</h1>
      <button onClick={goMain}>go main</button>
    </div>
  );
};

export default About;
