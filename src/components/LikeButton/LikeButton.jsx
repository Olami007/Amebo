"use client";
import React, { useState } from "react";

const LikeButton = () => {
  //   const [buttonClass, setButtonClass] = useState(
  //     "fa-solid fa-heart pt-4 pb-0 pl-10"
  //   );
  const [buttonClass, setButtonClass] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);

  const toggleLikeButton = () => {
    setButtonClass((prevValue) => !prevValue);
    // setLikeNumber((prevValue) => prevValue + 1);
    setLikeNumber((prevValue) =>
      !buttonClass ? prevValue + 1 : prevValue - 1
    );
  };
  return (
    <div>
      <i
        className={
          buttonClass
            ? "fa-solid fa-heart pt-4 pb-0 pl-10 text-red-600 pr-4"
            : "fa-solid fa-heart pt-4 pb-0 pl-10 pr-4 "
        }
        onClick={toggleLikeButton}
      >
        <span className="px-4">{likeNumber}</span>
      </i>
    </div>
  );
};

export default LikeButton;
