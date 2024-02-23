import React, { useState } from "react";
import {
  Paper,
  TextInput,
  Button,
  Title,
  Text,
  Anchor,
  PasswordInput,
  PaperProps,
  Group,
  Select,
} from "@mantine/core";
/// @ts-ignore
import classes from "./student-auth.module.css";
import { upperFirst, useToggle } from "@mantine/hooks";
import { ImageCollection } from "../../../assets";
import axios from "axios";

export default function StudentAuth(props: PaperProps) {
  const [type, toggle] = useToggle(["register", "login"]);
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    arm: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // console.log(JSON.stringify(formData));

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("api/student", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if(response.ok) {
        alert(data.message);
      } else {
        alert(data.error)
      }

      setFormData({
        name: "",
        class: "",
        arm: "",
      });
    } catch (error: any) {
      // Handle error (e.g., display error message)
      console.log("Oops:", error);
      alert("Something Happened");
    }
  };

  // async function fetchHello() {
  //   const response = await fetch("/api/student", {
  //     method: 'POST',
  //     body: JSON.stringify({hello: "world"})
  //   });
  //   // const data = await response;
  //   // alert('Its ' + data.blob);
  // }

  return (
    <div
      className={`font-sans pt-[80px] ${classes.wrapper}`}
      style={{ backgroundImage: `url(${ImageCollection.banner})` }}
    >
      <Paper className={classes.form} radius={0} p={30} {...props}>
        <Title
          order={2}
          className={`font-sans ${classes.title}`}
          ta="center"
          mt="md"
          mb={50}
        >
          {upperFirst(type)} to take your mid-term tests
        </Title>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Full name"
            placeholder="Jeffrey Benson"
            size="md"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          {type === "register" && (
            <Select
              label="Select your class"
              placeholder="Class"
              data={["JSS1", "JSS2", "SS1"]}
              mt="md"
              size="md"
              clearable
              name="class"
              value={formData.class}
              onChange={(value) => handleSelectChange("class", value)} // Pass name and value to handleSelectChange
              required
            />
          )}

          {type === "register" && (
            <Select
              label="Select your arm"
              placeholder="Arm"
              data={["JSS1", "JSS2", "SS1"]}
              mt="md"
              size="md"
              clearable
              name="arm"
              value={formData.arm}
              onChange={(value) => handleSelectChange("arm", value)} // Pass name and value to handleSelectChange
              required
            />
          )}

          <Group justify="space-between" mt={`4rem`}>
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>

            <Button
              type="submit"
              size="md"
              className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
