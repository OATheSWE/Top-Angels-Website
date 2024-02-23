import React from "react";
import { ReportSheet } from "../../src/views";
import { ImageCollection } from "../../assets";
import { secondarySubjects } from "../../src/data";

const Disbury = () => {
  return (
    <ReportSheet
      logoSrc={ImageCollection.disburyLogo}
      school={`DISBURY COLLEGE`}
      section={`SENIOR SECTION`}
      subjects={secondarySubjects}
    />
  );
};

export default Disbury;
