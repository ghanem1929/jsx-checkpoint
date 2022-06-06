import "./style.css";
import React, { Fragment } from "react";
import srcImg from "./assets/srcImg.jpg";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Ghanem</h1>
        <br />
        <img style={{ width: 350, height: 200 }} src={srcImg} alt="srcImg" />
        <br />

        <img
          style={{ width: 350, height: 200 }}
          src="adria-crehuet-cano-LIhB1_mAGhY-unsplash.jpg"
          alt="publicImg"
        />
      </div>
      <video width={500} height={380} controls>
        <source src="/ved.mp4" type="video/mp4" />
      </video>
    </>
  );
}

export default App;
