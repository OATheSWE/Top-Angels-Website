import { Title, Text, Grid, Image, Button, Divider } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

const ApplySchool = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });
  return (
    <section ref={ref} className={`w-full py-10 ${styles.body} bg-accent`}>
      <Title className={``} order={2}>
          How To Apply
        </Title>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <animated.div style={rightColAnimation} className={``}>
            <Text className="">
              At e-Byte Africa, we were founded on a shared passion for tech and
              a commitment to innovation. Our mission is to reshape the digital
              landscape by empowering businesses with cutting-edge web
              development, AI solutions, and tech consulting. In the coming
              year, we aspire to deepen our impact, setting new standards of
              excellence in the tech sphere. Join us on this transformative
              journey. 🌐💻
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} className="flex">
          <animated.div
            style={leftColAnimation}
            className="flex items-stretch max-lg:mx-auto"
          >
            <Text className="">
              At e-Byte Africa, we were founded on a shared passion for tech and
              a commitment to innovation. Our mission is to reshape the digital
              landscape by empowering businesses with cutting-edge web
              development, AI solutions, and tech consulting. In the coming
              year, we aspire to deepen our impact, setting new standards of
              excellence in the tech sphere. Join us on this transformative
              journey. 🌐💻
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default ApplySchool;
