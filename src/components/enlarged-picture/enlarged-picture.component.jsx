import React from "react";

import "./enlarged-picture.styles.scss";

const EnlargedPicture = (picture) => {
  const { url, hidePicture, id, handleClickArrow } = picture;

  return (
    <div
      className="enlarged-picture-component-container"
      // onClick={hidePicture}
    >
      <div className="flexbox-container">
        <div
          className={`arrow left-arrow`}
          onClick={() => handleClickArrow("left", "", id, "arrow")}
        >
          &#11164;
        </div>
        <div className="big-img-container">
          <img className="big-img" id={id} src={url} alt="big-pixabay" />
        </div>
        <div
          className="arrow right-arrow"
          onClick={() => handleClickArrow("right", "", id, "arrow")}
        >
          &#11166;
        </div>
      </div>
    </div>
  );
};

export default EnlargedPicture;
