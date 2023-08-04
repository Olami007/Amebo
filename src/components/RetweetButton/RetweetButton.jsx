"use client";
import React, { useState } from "react";

const RetweetButton = () => {
  const [buttonClass, setButtonClass] = useState(false);
  const [retweetNumber, setRetweetNumber] = useState(0);

  const toggleRetweetButton = () => {
    setButtonClass((prevValue) => !prevValue);
    setRetweetNumber((prevValue) =>
      !buttonClass ? prevValue + 1 : prevValue - 1
    );
  };
  return (
    <div>
      <i
        className={
          buttonClass
            ? "fa fa-retweet pt-4 pb-0 pl-10 text-blue-600 pr-4"
            : "fa fa-retweet pt-4 pb-0 pl-10 pr-4 "
        }
        onClick={toggleRetweetButton}
      >
        <span className="px-4">{retweetNumber}</span>
      </i>
    </div>
  );
};

export default RetweetButton;
