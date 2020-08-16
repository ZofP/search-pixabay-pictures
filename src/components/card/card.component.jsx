import React from "react";

import "./card.styles.css";

const Card = ({
  picture: { previewURL, tags, webformatURL, user },
  showPicture,
}) => {
  return (
    <div className="card-container">
      <div
        className="img-container"
        onClick={(url = webformatURL) => showPicture(webformatURL)}
      >
        <img src={previewURL} alt="pixabay" />
      </div>
      <h2>tags: {tags}</h2>
      <p>user: {user}</p>
    </div>
  );
};

export default Card;
