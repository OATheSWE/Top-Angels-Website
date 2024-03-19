import React, { useState } from "react";
import {
  Paper,
  Title,
  PaperProps,
  Group,
  Select,
  Container,
  Center,
} from "@mantine/core";
/// @ts-ignore
import classes from "./student-auth.module.css";
import axios from "axios";
import CryptoJS from "crypto-js";
import { classeS, styles } from "../../data";

export default function StudentResult(props: PaperProps) {
  const [formData, setFormData] = useState({
    session: "",
    term: "",
    class: "",
    type: "",
  });

  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  const handleSelectChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/signup.php",
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
          session: "",
          term: "",
          class: "",
          type: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Paper className={` w-full pt-28 ${styles.body} pb-10`} >
      <Title
        order={2}
        className={`font-sans ${classes.title}`}
        ta="center"
        
        mb={50}
      >
        Fill in the form carefully to get your result
      </Title>

      <form onSubmit={handleSubmit}>
        <Select
          label="Select the session"
          placeholder="Session"
          data={["2023/2024"]}
          mt="md"
          size="md"
          clearable
          name="session"
          value={formData.session}
          onChange={(value) => handleSelectChange("session", value)} // Pass name and value to handleSelectChange
          required
        />

        <Select
          label="Select the class"
          placeholder="Class"
          data={classeS}
          mt="md"
          size="md"
          clearable
          name="class"
          value={formData.class}
          onChange={(value) => handleSelectChange("class", value)} // Pass name and value to handleSelectChange
          required
        />

        <Select
          label="Select the term"
          placeholder="Term"
          data={["1ST TERM", "2ND TERM", "3RD TERM"]}
          mt="md"
          size="md"
          clearable
          name="term"
          value={formData.term}
          onChange={(value) => handleSelectChange("term", value)} // Pass name and value to handleSelectChange
          required
        />

        <Select
          label="Select type"
          placeholder="Type of Result"
          data={["MIDTERM", "EXAM"]}
          mt="md"
          size="md"
          clearable
          name="type"
          value={formData.type}
          onChange={(value) => handleSelectChange("type", value)} // Pass name and value to handleSelectChange
          required
        />

        <Center mt={`4rem`} className="">
          <button
            type="submit"
            className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300 p-3 text-white w-full"
          > 
            Get Result
          </button>
        </Center>
      </form>
    </Paper>
  );
}
