import React, { useEffect, useState } from "react";
import { Center, Textarea, Modal, TextInput } from "@mantine/core";
// @ts-ignore
import classes from "./goals.module.css";
import { useDisclosure } from "@mantine/hooks";
import Btn from "../button";
import axios from "axios";
import CryptoJS from "crypto-js";

export default function EditModal({ opened, onClose, assignmentId }) {
  const [formData, setFormData] = useState({
    subject: "",
    class: "",
    link: "",
  });

  useEffect(() => {
    const fetchAssessmentData = async () => {
      const data = { assessment_id: assignmentId };
      try {
        const response = await axios.post(
          "http://localhost:8000/view-assessment.php",
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          const assessmentData = response.data.assessment;
          // Loop through assessment data and update formData state
          setFormData({
            subject: assessmentData.subject,  
            class: assessmentData.class,
            link: assessmentData.link,
          });
        } else {
          console.error("Error:", response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (opened && assignmentId) {
      fetchAssessmentData();
    }
  }, [opened, assignmentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission if called from useEffect

    // Prompt the user to ask if they want to update their credentials
    const confirmUpdate = window.confirm(
      "You are about to update your assessment data!"
    );

    // Include unique ID in form data
    const updatedFormData = { ...formData, assessment_id: assignmentId };

    if (confirmUpdate) {
      try {
        const response = await axios.post(
          "http://localhost:8000/updateAssess.php",
          updatedFormData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          alert(response.data.message);
          onClose();
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
            Edit Your Assessment
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
                Save
              </button>
            </Center>
          </form>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
