import React, { useEffect } from "react";
import { Button, Title } from "@mantine/core";
import { ImageCollection } from "../../../assets";
import { NavBar } from "../../components";
import { styles } from "../../data";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useScroll } from "@react-spring/web";

const Header = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  // Animation for the header text
  const textAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 80, friction: 26 },
  });

  return (
    <div ref={ref} className={`relative min-h-screen min-w-screen ${styles.body}`}>
      {/* Background image */}
      <div
        className="absolute inset-0 w-screen h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${ImageCollection.home})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute w-screen h-screen inset-0 bg-black bg-opacity-70"></div>
      {/* Your content */}
      <NavBar />
      <div className="flex flex-col justify-center items-center w-[85vw] h-[70vh]">
      <animated.div style={textAnimation}>
        <Title
          order={1}
          className="font-sans text-white z-30"
          ta="center"
          mt="md"
          mb={50}
        >
          Welcome to Top Angel Schools / Disbury College
        </Title>
      </animated.div>
      <animated.div style={textAnimation}>
        <p className="-mt-10 max-w-[600px] w-full text-center text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          rerum voluptates voluptatem corporis fugiat minima?
        </p>
      </animated.div>
      <animated.div style={textAnimation}>
        <Button
          size="lg"
          className="group relative border-2 border-white hover:bg-primary hover:border-primary transition duration-300 px-14 mt-4 overflow-visible"
        >
          <span className="relative font-normal">Visit Us to Know More</span>
          <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary left-[95%] transition duration-300"></span>
          <span className="absolute top-1/2 w-8 h-0.5 bg-white group-hover:bg-primary right-[95%] transition duration-300"></span>
        </Button>
      </animated.div>
      </div>
    </div>
  );
};

export default Header;
