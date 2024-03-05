import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <section ref={ref} className={`${styles.body} pt-12`}>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, sm: 5.3 }} className="flex" m={0}>
          <animated.div
            style={leftColAnimation}
            className="flex flex-col items-stretch max-lg:mx-auto"
          >
            <Title className={classes.title} order={2} mb={10}>
              About Our School
            </Title>

            <Image
              src={ImageCollection.home}
              className={`w-full object-cover object-top rounded-xl`}
              alt="About Image"
            />
          </animated.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6.7 }} className="flex justify-center items-center bg-secondary rounded-lg">
          <animated.div style={rightColAnimation} className={``}>
            <Text className="my-2">
              At e-Byte Africa, we're digital architects crafting innovative
              solutions that redefine the digital landscape. From helping
              businesses navigate the digital terrain and providing existing
              teams with the perfect fit for seamless project execution to
              building and maintaining projects, we bring a fresh perspective.
            </Text>
          </animated.div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
