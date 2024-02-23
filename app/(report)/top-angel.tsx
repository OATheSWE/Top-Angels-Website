import React from "react";
import { ReportSheet } from "../../src/views";
import { ImageCollection } from "../../assets";
import { primarySubjects } from "../../src/data";

const TopAngel = () => {
  return (
    <ReportSheet
      logoSrc={ImageCollection.topAngelLogo}
      school={`TOP ANGEL SCHOOLS`}
      section={`BASIC SECTION`}
      subjects={primarySubjects}
    />
  );
};

export default TopAngel;
