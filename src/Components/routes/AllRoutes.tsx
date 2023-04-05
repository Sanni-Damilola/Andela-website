/** @format */

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import { lazy } from "react";

const LandingComp = lazy(() => import("../LandingComp"));
const AboutComp = lazy(() => import("../AboutComp"));
const TechnologyExpertsComp = lazy(() => import("../TechnologyExpertsComp"));
const BusinessComp = lazy(() => import("../BusinessComp"));

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingComp />,
      },
    ],
  },
  {
    path: "/expert",
    element: <TechnologyExpertsComp />,
  },
  {
    path: "/business",
    element: <BusinessComp />,
  },
  {
    path: "/about",
    element: <AboutComp />,
  },
]);
