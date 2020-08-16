import React from "react";

import "./card.styles.scss";

const Card = ({
  picture: { previewURL, tags, webformatURL, user },
  showPicture,
}) => {
  const tagsArray = tags.split(",").filter(Boolean);

  return (
    <div className="card-container">
      <div
        className="img-container"
        onClick={(url = webformatURL) => showPicture(webformatURL)}
      >
        <img src={previewURL} alt="pixabay" />
      </div>
      <h4>tags:</h4>
      <ul>
        {tagsArray.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
      <p>user: {user}</p>
    </div>
  );
};

export default Card;
