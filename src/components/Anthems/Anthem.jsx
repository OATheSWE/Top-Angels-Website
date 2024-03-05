import { Title, Text, Grid, Image } from "@mantine/core";
import classes from "./Anthem.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "../../data";
import { ImageCollection } from "../../../assets";

export default function Anthem() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  // Animation for the left column (coming from the left)
  const leftColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 10 },
  });

  // Animation for the right column (coming from the right)
  const rightColAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 10 },
  });

  return (
    <section ref={ref} className={`${styles.body} w-full relative mt-10`}>
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ImageCollection.home})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <Grid gutter={90} className={`font-sans`}>
        <Grid.Col span={{ base: 12, sm: 6 }} className="flex" m={0}>
          <animated.div
            style={leftColAnimation}
            className="flex flex-col items-stretch max-lg:mx-auto"
          >
            <Title className={classes.title} order={2} mb={10}>
              Top Angel School Song
            </Title>

            <Text className="my-2 leading-7 text-white">
              At e-Byte Africa, we're digital architects crafting innovative
              solutions that redefine the digital landscape. From helping
              businesses navigate the digital terrain and providing existing
              teams with the perfect fit for seamless project execution to
              building and maintaining projects, we bring a fresh perspective.
            </Text>
          </animated.div>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, sm: 6 }}
          className="flex items-stretch rounded-lg"
        >
          <animated.div style={rightColAnimation} className={``}>
            <Title className={classes.title} order={2} mb={10}>
              Disbury College Song
            </Title>

            <Text className="my-2 leading-7 text-white">
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
