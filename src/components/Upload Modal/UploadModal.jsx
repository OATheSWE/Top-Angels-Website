import React, { useEffect, useState } from "react";
import { Center, Textarea, Modal, TextInput } from "@mantine/core";
// @ts-ignore
import classes from "./goals.module.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import CryptoJS from "crypto-js";
import axios from "axios";

export default function UploadModal({ opened, onClose }) {
  const [formData, setFormData] = useState({
    subject: "",
    class: "",
    link: "",
  });

  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  const [uniqueId, setUniqueId] = useState(null); // State to store decrypted unique ID

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
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission if called from useEffect

    try {
      // Include unique ID in form data
      const updatedFormData = { ...formData, encrypted_unique_id: uniqueId };

      const response = await axios.post(
        "http://localhost:8000/uploadAssess.php",
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.success) {
        alert(response.data.message);
        setFormData({
          subject: "",
          class: "",
          link: "",
        });
        onClose();
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal.Root
      opened={opened}
      onClose={onClose}
      classNames={{
        inner: classes.inner,
        content: classes.content,
        title: classes.title,
      }}
      className="font-poppins"
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header className="mx-auto block">
          <Modal.Title className="font-bold uppercase">
            Create Your Assessment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <TextInput
              label="Subject"
              placeholder="Type your subject"
              size="md"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="Class"
              placeholder="Select your class"
              size="md"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              required
            />
            <TextInput
              label="Link"
              placeholder="Link to assessment"
              size="md"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              required
            />
          <Center className={`mx-auto mt-5`}>
            <button
              type="submit"
              className={`rounded-xl text-[17px] h-[50px] text-white bg-blue-700 justify-center hover:bg-[#374151] mb-4 max-w-[170px] w-full px-7`}
            >
              Create
            </button>
          </Center>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
