import React from "react";

import "./card.styles.scss";

const Card = ({
  picture: { id, previewURL, tags, webformatURL, user },
  showPicture,
}) => {
  const tagsArray = tags.split(",").filter(Boolean);

  return (
    <div className="card-container">
      <div
        className="img-container"
        onClick={(event) =>
          showPicture({
            direction: false,
            url: webformatURL,
            id: id,
            event: event,
          })
        }
      >
        <img src={previewURL} alt="pixabay" />
      </div>
      <div className="tags">
        <h4>tags:</h4>
        <ul>
          {tagsArray.map((tag) => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </div>
      <p>user: {user}</p>
    </div>
  );
};

export default Card;
