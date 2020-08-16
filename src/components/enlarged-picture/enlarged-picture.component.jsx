import React from "react";

import "./enlarged-picture.styles.scss";

const EnlargedPicture = ({ url, hidePicture }) => (
  <div className="gray-background" value={url} onClick={hidePicture}>
    <div className="big-img-container">
      <img className="big-img" src={url} alt="big-pixabay" />
    </div>
  </div>
);

export default EnlargedPicture;
