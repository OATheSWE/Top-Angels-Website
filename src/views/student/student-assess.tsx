import React, { useState, useEffect } from "react";
import { Grid } from "@mantine/core";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { styles } from "../../data";
import { ExamCard } from "../../components";

// Define the type for assessment data
interface Assessment {
  subject: string;
  class: string;
  link: string;
}

const StudentAssess: React.FC = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([]); 
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ success: boolean; error?: string; assessments: Assessment[] }>('http://localhost:8000/retrieve-assess.php');
        if (response.data.success) {
          setAssessments(response.data.assessments);
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const trail = useTrail(assessments.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300, // Adjust this delay based on your preference
  });

  const allAssessments = trail.map((style, index) => (
    <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
      <animated.div
        style={style}
        // className
      >
        <ExamCard
          subject={assessments[index]?.subject}
          class={assessments[index]?.class}
          link={assessments[index]?.link}
        />
      </animated.div>
    </Grid.Col>
  ));

  return (
    <Grid className={`${styles.body} pt-24`} ref={ref}>
      {allAssessments}
    </Grid>
  );
};

export default StudentAssess;
