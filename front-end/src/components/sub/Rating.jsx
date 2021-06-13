import React from "react";

export default function Rating({ ratingValue, totalReviews }) {
  return (
    <div>
      <span>
        <i
          className={
            ratingValue >= 1
              ? "fas fa-star"
              : ratingValue >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratingValue >= 2
              ? "fas fa-star"
              : ratingValue >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratingValue >= 3
              ? "fas fa-star"
              : ratingValue >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratingValue >= 4
              ? "fas fa-star"
              : ratingValue >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            ratingValue >= 5
              ? "fas fa-star"
              : ratingValue >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <em>{` ${totalReviews && totalReviews} reviews`} </em>
    </div>
  );
}
