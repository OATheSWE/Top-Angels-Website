import React from 'react';
import { Text, Group, Rating, Image } from "@mantine/core";

interface Testimonial {
  imageSrc: string;
  content: string;
  name: string;
  rating: number;
}

interface Props {
  testimonial: Testimonial;
}

const Card: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="flex space-x-4 w-full bg-secondary p-5 rounded-lg font-sans">
      <Group className="flex items-start">
        <Image
          src={testimonial.imageSrc}
          className={`w-[113.1px] h-[35px] object-cover rounded-full`}
          alt="Student Image"
        />
      </Group>
      <div className="flex flex-col space-y-4">
        <Text size="sm">{testimonial.content}</Text>
        <Text className="text-[18px] font-bold">{testimonial.name}</Text>
        <Rating value={testimonial.rating} fractions={2} readOnly color="#f44336" />
      </div>
    </div>
  );
}

export default Card;
