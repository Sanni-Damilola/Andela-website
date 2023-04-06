/** @format */

import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import AndelaFooter from "../Footer";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      👆👇
      {/*childern for the Body component */}
      <AndelaFooter />
    </div>
  );
};

export default HomeLayout;
