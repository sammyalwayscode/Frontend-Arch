import React from "react";
import { Outlet } from "react-router-dom";
import { DashHead, Navigation } from "../blocks";

const DashLayout = () => {
  return (
    <div>
      <DashHead />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default DashLayout;
