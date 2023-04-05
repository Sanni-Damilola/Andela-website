/** @format */

import React from "react";
import BrilliantsComp from "./BrilliantComp";
import AndelaFooter from "./Footer";
import Heros from "./Heros";
import Insights from "./Insights";
import Spark from "./RemoteTeam";
import ScaleFast from "./ScaleFast";
import Commitment from "./Commitment";
import Connection from "./Connection";
import FindFlipFlop from "./FindFlipFlop";
import Gallery from "./Gallery";
import VibrantCommunity from "./VibrantCommunity";

const TechnologyExpertsComp = () => {
  return (
    <div>
      <Heros />
      <BrilliantsComp />
      <VibrantCommunity />
      <FindFlipFlop />
      <Spark />
      <ScaleFast />
      <Gallery />
      <Commitment />
      <Insights />
      <Connection />
      <AndelaFooter />
    </div>
  );
};

export default TechnologyExpertsComp;
