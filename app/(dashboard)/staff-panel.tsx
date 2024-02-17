import React from "react";
import { Landing } from "../../src/views";
import { Text } from "@mantine/core";
import { styles } from "../../src/data";
import { ExamCard } from "../../src/components";


const StaffPanel = () => {
  return (
    <div className={`${styles.body} mt-[100px]`}>
      <ExamCard />
    </div>
  );
};

export default StaffPanel;
