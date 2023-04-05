/** @format */

import React from "react";
import CurveBox from "./CurveBox";
import Elevate from "./Elevate";
import FindFlip from "./FindFlip";

import AndelaFooter from "./Footer";
import GrowBusiness from "./GrowBusiness";
import Heross from "./Heross";
import Insights from "./Insights";
import PeaceMind from "./PeaceMind";
import Spark from "./RemoteTeam";
import TeamBuild from "./TeamBuild";
import TrustedComp from "./TrustedComp";

const BusinessComp = () => {
  return (
    <div>
      <Heross />
      <TrustedComp />
      <FindFlip />
      <TeamBuild />
      <PeaceMind />
      <Spark />
      <Insights />
      <CurveBox />
      <Elevate />
      <GrowBusiness />
      <AndelaFooter />
    </div>
  );
};

export default BusinessComp;
