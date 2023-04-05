/** @format */

import React from "react";
import BrilliantsComp from "./BrilliantComp";
import BuildTeam from "./BuildTeam";
import EmpowerFuture from "./EmpowerFuture";
import AndelaFooter from "./Footer";

import Insights from "./Insights";
import LaunchComp from "./LaunchComp";
import MeaningfulWork from "./MeaningfulWork";
import ScaleFast from "./ScaleFast";
import Trusted from "./Trusted";
import RemoteTeam from "./RemoteTeam";
import Hero from "./Hero";

const LandingComp = () => {
  return (
    <div>
      <Hero />
      <LaunchComp />
      <Trusted />
      <BuildTeam />
      <EmpowerFuture />
      <RemoteTeam />
      <BrilliantsComp />
      <MeaningfulWork />
      <Insights />
      <ScaleFast />
      <AndelaFooter />
    </div>
  );
};

export default LandingComp;
