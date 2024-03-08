import { Title, Text, Grid, Image, Button } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import Btn from "../../components/button";
import { useState } from "react";
import { ImageCollection } from "../../../assets";

export default function AboutPage() {

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
      <Grid gutter={90} className={`font-sans mt-12`}> 
        <Grid.Col span={{ base: 12, md: 6.7 }}>
          <animated.div style={rightColAnimation} className={``}>
            <Title className={classes.title} order={2}>
              Unleashing Digital Innovation: The e-Byte Africa Story
            </Title>

            <Text className="my-2">
              At e-Byte Africa, we were founded on a shared passion for tech and
              a commitment to innovation. Our mission is to reshape the digital
              landscape by empowering businesses with cutting-edge web
              development, AI solutions, and tech consulting. In the coming
              year, we aspire to deepen our impact, setting new standards of
              excellence in the tech sphere. Join us on this transformative
              journey. 🌐💻
            </Text>

            <Button
              size="lg"
              className="group relative text-black border-2 border-primary hover:bg-primary hover:text-white transition duration-300 px-14 overflow-visible"
            >
              <span className="relative font-normal">EXPLORE NOW</span>
              <span className="absolute top-1/2 w-8 h-0.5  bg-primary left-[95%] transition duration-300"></span>
              <span className="absolute top-1/2 w-8 h-0.5 bg-primary right-[95%] transition duration-300"></span>
            </Button>
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5.3 }} className="flex">
          <animated.div
            style={leftColAnimation}
            className="flex items-stretch max-lg:mx-auto"
          >
            <Image
              src={ImageCollection.home}
              className={`w-full object-cover object-top rounded-xl`}
              alt="About Image"
            />
          </animated.div>
        </Grid.Col>
      </Grid>
      <Grid gutter={90} className={`font-sans mt-12`}>
        <Grid.Col
          span={{ base: 12 }}
          className="flex justify-center items-center"
        >
          <animated.div style={rightColAnimation} className={``}>
            <Title className={`${classes.title} text-center`} order={2}>
              Unleashing Digital Innovation: The e-Byte Africa Story
            </Title>

            <Text className="my-2 text-center">
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
}
