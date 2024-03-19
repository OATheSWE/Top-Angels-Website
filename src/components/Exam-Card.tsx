import React from "react";
import { Box, Button, Text } from "@mantine/core";

interface ExamCardProps {
  subject: string;
  class: string;
  link: string;
  showButtons?: boolean;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

const ExamCard: React.FC<ExamCardProps> = ({
  subject,
  class: classProp,
  link,
  showButtons,
  onEditClick,
  onDeleteClick,
}) => {
  const handleButtonClick = () => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <Box className="shadow-xl w-full bg-gray-700 text-white px-4 py-3 my-2 flex justify-between items-center rounded-lg">
      <div>
        <Text className="font-bold">{subject}</Text>
        <Text className="text-[14px]">{classProp}</Text>
        <div className="flex space-x-2 mt-1">
          {showButtons && (
            <>
              <Button
                size="xs"
                className="border-2 border-transparent bg-blue-700 rounded-lg hover:bg-transparent hover:border-blue-700 transition duration-300"
                onClick={onEditClick} // Attach onClick event handler
              >
                Edit
              </Button>
              <Button
                size="xs"
                className="border-2 border-transparent bg-red-700 rounded-lg hover:bg-transparent hover:border-red-700 transition duration-300"
                onClick={onDeleteClick} // Attach onClick event handler
              >
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
      <Button
        size="md"
        className="border-2 border-transparent bg-blue-700 rounded-lg hover:bg-transparent hover:border-blue-700 transition duration-300"
        onClick={handleButtonClick} // Attach onClick event handler
      >
        Open
      </Button>
    </Box>
  );
};

export default ExamCard;
