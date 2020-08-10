import React, { useState } from "react";
import TitleInstagram from "./TitleInstagram";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import "./Instagram.css";

function MainInstagram() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <TitleInstagram />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default MainInstagram;
