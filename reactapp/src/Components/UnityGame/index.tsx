import React, { useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./UnityGame.css";

const unityContent = new UnityContent(
  "UnityBuild/Build/UnityBuild.json",
  "UnityBuild/Build/UnityLoader.js",
  {
    adjustOnWindowResize: false,
  }
);

function UnityGame() {
  const [score, setScore] = useState(0);
  const onClick = () => {
    unityContent.send("ExternalBridge", "testMethod");
  };

  unityContent.on("scoreChange", (score: number) => {
    setScore(score);
  });

  return (
    <>
      <h2>Two way communication between Unity and React</h2>
      <h1>Balls: {score}</h1>
      <button onClick={onClick}>Spawn!</button>
      <div className="UnityGameWrapper">
        <Unity unityContent={unityContent} />
      </div>
    </>
  );
}

export default UnityGame;
