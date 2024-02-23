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
import { ImageCollection } from "../../../assets";

export default function Landing() {
  return (
    <div className="relative font-sans pt-[80px] min-h-screen flex justify-center items-center ">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${ImageCollection.home})` }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Your content */}
      <Title order={1} className="font-sans text-white z-30" ta="center" mt="md" mb={50}>
        Welcome to Top Angel Schools / Disbury College
      </Title>
    </div>
  );
}
