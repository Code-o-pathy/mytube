import React from "react";

const Button = ({name}) => {

  return (
    <div>
      <button className="px-4 py-1 mx-2 rounded-lg bg-gray-300 text-black">{name} </button>
    </div>
  );
};

export default Button;
