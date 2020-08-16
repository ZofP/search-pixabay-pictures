import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = ({ pictures, showPicture }) => {
  return (
    <div className="card-list">
      {pictures.map((picture) => (
        <Card key={picture.id} picture={picture} showPicture={showPicture} />
      ))}
    </div>
  );
};

export default CardList;
