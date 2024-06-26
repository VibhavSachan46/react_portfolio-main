import React from "react";
import leetcode from "../assets/image/leetcode.jpg"
const Bot = () => {
  return (
    <a href="https://github.com/VibhavSachan46" target="_blank">
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
        <img
          src={leetcode}
          className="rounded-full w-9/12"
        ></img>
      </div>
    </a>
  );
};

export default Bot;
