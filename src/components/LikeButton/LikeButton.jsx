"use client";
import React from "react";

const LikeButton = () => {
  return (
    <div>
      <i
        className="fa-solid fa-heart pt-4 pb-0 pl-10"
        onClick={() => {
          setLikes;
        }}
      >
        {likes}
      </i>
    </div>
  );
};

export default LikeButton;
