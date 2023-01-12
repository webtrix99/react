import React from "react";

const Card = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    slaString,
    costForTwoString,
  } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt=""
        />
      </div>
      <div className="card-content">
        <div>{name}</div>
        <div>{cuisines.join(", ")}</div>
      </div>
      <div className="cart-footer">
        <div className="rating">{avgRating}</div>
        <div className="time">{slaString}</div>
        <div className="avg">{costForTwoString}</div>
      </div>
    </div>
  );
};

export default Card;
