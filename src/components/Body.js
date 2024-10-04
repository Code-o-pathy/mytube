import React, { useDebugValue, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

const Body = () => {
  return <div className="flex cursor-default">
    <Sidebar /> 
    <Outlet/>
  </div>;
};

export default Body;
