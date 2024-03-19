import React, { useEffect, useState } from "react";
import {
  Paper,
  Title,
  Group,
  Select,
  Container,
  Center,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import axios from "axios";
import CryptoJS from "crypto-js";
import { styles } from "../../data";
import classes from "./student-auth.module.css";

export default function StudentProfile(props) {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    email: "",
    password: "",
  });

  const [uniqueId, setUniqueId] = useState(null); // State to store decrypted unique ID

  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  useEffect(() => {
    // Retrieve the unique ID from localStorage
    const encryptedUniqueId = localStorage.getItem("www");

    const decryptedUniqueId = CryptoJS.AES.decrypt(
      encryptedUniqueId,
      secretKey
    );

    // Prepare the data to be sent to the backend
    const data = {
      encrypted_unique_id: decryptedUniqueId.toString(CryptoJS.enc.Utf8),
    };

    // Store decrypted unique ID in state
    setUniqueId(data.encrypted_unique_id);

    // Send an HTTP POST request to your PHP backend
    axios
      .post("http://localhost:8000/getStudentData.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the backend
        const responseData = response.data;
        if (responseData.success) {
          // Update state with the user data
          setFormData({
            name: responseData.name,
            class: responseData.class,
            email: responseData.email,
            password: responseData.password,
          });
        } else {
          console.error("Error:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Run only once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission if called from useEffect

    // Prompt the user to ask if they want to update their credentials
    const confirmUpdate = window.confirm(
      "You are about to update your student data!"
    );

    if (confirmUpdate) {
      try {
        // Include unique ID in form data
        const updatedFormData = { ...formData, encrypted_unique_id: uniqueId };

        const response = await axios.post(
          "http://localhost:8000/studentProfileUpdate.php",
          updatedFormData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          alert(response.data.message);
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Paper className={`w-full pt-28 ${styles.body} pb-10`}>
      <Title
        order={2}
        className={`font-sans ${classes.title}`}
        ta="center"
        mb={50}
      >
        Student Information
      </Title>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Your name"
          size="md"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Select
          label="Your class"
          data={["JSS1", "JSS2", "SS1"]}
          mt="md"
          size="md"
          clearable
          name="class"
          value={formData.class}
          onChange={(value) => handleSelectChange("class", value)} // Pass name and value to handleSelectChange
          required
        />

        <TextInput
          label="Your Email"
          size="md"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          mt={`md`}
        />

        <PasswordInput
          label="Your password"
          size="md"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
          mt={`md`}
        />

        <Center mt={`4rem`} className="">
          <button
            type="submit"
            className="bg-blue-700 rounded-lg hover:bg-gray-700 transition duration-300 p-3 text-white w-full"
          >
            Update
          </button>
        </Center>
      </form>
    </Paper>
  );
}
