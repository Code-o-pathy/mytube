import React from "react";
import Button from "./Button";
import list from "../utils/Constants";
const ButtonList = () => {
  return <div className="flex">
    {list.map((title,index)=><Button key={index} name={title} />)}
  </div>;
};

export default ButtonList;
