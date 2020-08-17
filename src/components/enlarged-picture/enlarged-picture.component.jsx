import React from "react";

import "./enlarged-picture.styles.scss";

const EnlargedPicture = (picture) => {
  const { url, hidePicture, id, handleClickArrow } = picture;

  return (
    <div
      className="enlarged-picture-component-container"
      onClick={(event) =>
        hidePicture({
          url: url,
          id: id,
          event: event,
        })
      }
    >
      <div className="flexbox-container">
        <div
          className={`arrow left-arrow`}
          id={id}
          onClick={(event) =>
            handleClickArrow({
              direction: "left",
              url: url,
              id: id,
              event: event,
            })
          }
        >
          &#11164;
        </div>
        <div className="big-img-container">
          <img className="big-img" id={id} src={url} alt="big-pixabay" />
        </div>
        <div
          className="arrow right-arrow"
          id={id}
          onClick={(event) =>
            handleClickArrow({
              direction: "right",
              url: url,
              id: id,
              event: event,
            })
          }
        >
          &#11166;
        </div>
      </div>
    </div>
  );
};

export default EnlargedPicture;
