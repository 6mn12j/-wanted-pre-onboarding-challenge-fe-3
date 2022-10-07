import React from "react";
import { useRouter } from "../Hooks/useRouter";

const Root = () => {
  const { navigate } = useRouter();

  const goAbout = () => {
    navigate("/about");
  };
  return (
    <div className="main">
      <h1>Root</h1>
      <button onClick={goAbout}>go about</button>
    </div>
  );
};

export default Root;
