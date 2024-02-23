import React from "react";
import { Group, Box, Burger, Drawer, ScrollArea, Text } from "@mantine/core";
import classes from "./NavBar.module.css";
import "./Navbar.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import { styles } from "../../data";
import { Link } from "expo-router";

const navLinks = [
  { text: "Top Angel", href: "/top-angel" },
  { text: "Disbury College", href: "/disbury" },
];

export default function NavBar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box className="fixed w-full z-[99999] shadow-xl ">
      <header
        className={`flex justify-between items-center bg-blue-700 md:px-8 font-sans ${classes.header} ${styles.body}`}
      >
        <Group h="100%" className="flex items-center">
          <Link href="/">
            <Text className="font-extrabold text-primary text-[25px] max-[480px]:text-[21px] font-sans text-white">
              Top Angel/Disbury
            </Text>
          </Link>
        </Group>

        <Group h="100%" gap={0} className="hidden md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans ${classes.link}`}
            >
              {link.text}
            </Link>
          ))}
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          hiddenFrom={`sm`}
          size={23}
          color="white"
        />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        hiddenFrom="sm"
        zIndex={1000000}
        className="font-sans text-black p-0 m-0"
      >
        <ScrollArea
          h={`calc(100vh - 80px)`}
          mx="-md"
          className="block mx-auto px-4"
          
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={`${link.href}`}
              className={`font-sans text-black ${classes.link}`}
              onPress={toggleDrawer}
            >
              {link.text}
            </Link>
          ))}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
