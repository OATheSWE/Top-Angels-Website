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
import classes from "./staff-auth.module.css";
import { upperFirst, useToggle } from "@mantine/hooks";
import { ImageCollection } from "../../../assets";
import axios from "axios";
import { router } from "expo-router";
import CryptoJS from 'crypto-js'

export default function StaffAuth(props: PaperProps) {
  const [type, toggle] = useToggle(["register", "login"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const secretKey = "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (type === "register") {
        const response = await axios.post(
          "http://localhost:8000/signupStaff.php",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          alert("Sign Up Successful");
          setFormData({
            name: "",
            email: "",
            password: "",
          });
        }
      } else if (type === "login") {
        const response = await axios.post(
          "http://localhost:8000/loginStaff.php",
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          // Retrieve unique_id
          const uniqueId = response.data.unique_id;

          // Encrypt the unique_id
          const encryptedUniqueId = CryptoJS.AES.encrypt(uniqueId, secretKey).toString()

          // Store encrypted unique_id in local storage
          localStorage.setItem("www", encryptedUniqueId);
          
          // Prompt the user to close the login window
          alert("You are now logged in");
          router.replace("/upload-assessment");
        } else {
          alert("Incorrect Name or Password");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          {upperFirst(type)} to get access to your dashboard
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
            <TextInput
              label="Email"
              placeholder="example@gmail.com"
              size="md"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              mt={`md`}
            />
          )}

          <PasswordInput
            label="Password"
            placeholder="1233456ax"
            size="md"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            mt={`md`}
          />

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

            <button
              type="submit"
              className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300 p-3 text-white"
            >
              {upperFirst(type)}
            </button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}
