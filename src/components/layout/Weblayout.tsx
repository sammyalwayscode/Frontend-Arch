import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../blocks";

const Weblayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Weblayout;
