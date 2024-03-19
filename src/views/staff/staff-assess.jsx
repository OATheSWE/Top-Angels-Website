import React, { useState, useEffect } from "react";
import { Button, Grid, Modal, Center } from "@mantine/core";
import { useTrail, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { styles } from "../../data";
import { Btn, EditModal, ExamCard, UploadModal } from "../../components";
import { IconImports } from "../../../assets";
import CryptoJS from "crypto-js";

const StaffAssess = () => {
  const [assessments, setAssessments] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [modalOpened, setModalOpened] = useState(false);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const secretKey =
    "21d1f43eee6a5780499e81575231952e7dd1f88274f72f6d0f78ffe213944aa9";

  useEffect(() => {
    const encryptedUniqueId = localStorage.getItem("www");
    const decryptedUniqueId = CryptoJS.AES.decrypt(
      encryptedUniqueId,
      secretKey
    ).toString(CryptoJS.enc.Utf8);

    const data = {
      encrypted_unique_id: decryptedUniqueId,
    };

    axios
      .post("http://localhost:8000/retrieve-assess-staff.php", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        const responseData = response.data;
        if (responseData.success) {
          setAssessments(responseData.assessments);
        } else {
          console.error("Error:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = async (assessmentId) => {
    const confirmUpdate = window.confirm(
      "You are about to delete your assessment!"
    );

    const data = { assessment_id: assessmentId };

    if (confirmUpdate) {
      try {
        const response = await axios.post(
          "http://localhost:8000/deleteAssess.php",
          data,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.success) {
          setAssessments((prevAssessments) =>
            prevAssessments.filter(
              (assessment) => assessment.id !== assessmentId
            )
          );
          alert(response.data.message);
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleEdit = (assessment) => {
    if (assessment && assessment.id) {
      // Check if assignment and its id exist
      setSelectedAssessment(assessment.id);
      setEditModalOpened(true);
    } else {
      console.error("Invalid assignment object:", assessment);
    }
    
  };

  const trail = useTrail(assessments.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(-50%)",
    filter: inView ? "blur(0)" : "blur(4px)",
    config: { mass: 1, tension: 100, friction: 26 },
    delay: 300,
  });

  const allAssessments = trail.map((style, index) => (
    <Grid.Col span={{ base: 12, xs: 6, md: 4 }} key={index}>
      <animated.div style={style}>
        <ExamCard
          subject={assessments[index]?.subject}
          class={assessments[index]?.class}
          link={assessments[index]?.link}
          showButtons={true}
          onEditClick={() => handleEdit(assessments[index])}
          onDeleteClick={() => handleDelete(assessments[index]?.id)}
        />
      </animated.div>
    </Grid.Col>
  ));

  return (
    <div className={`pt-24 ${styles.body}`}>
      <Btn
        text="Create Assessment"
        click={() => setModalOpened(true)}
        style={`rounded-xl font-semibold text-[17px] h-[60px] bg-[#374151] text-white hover:bg-black mb-10`}
        icon={<IconImports.Plus size={24} color="white" />}
      />
      <UploadModal opened={modalOpened} onClose={() => setModalOpened(false)} />
      <EditModal
        opened={editModalOpened}
        onClose={() => setEditModalOpened(false)}
        assignmentId={selectedAssessment}
      />
      <Grid className={``} ref={ref}>
        {allAssessments}
      </Grid>
    </div>
  );
};

export default StaffAssess;
