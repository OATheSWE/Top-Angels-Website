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
import { useForm } from "@mantine/form";

export default function StudentAuth(props: PaperProps) {
  const [type, toggle] = useToggle(["register", "login"]);
  const form = useForm({
    initialValues: {
      name: "",
      
    }
  });

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

        <form onSubmit={form.onSubmit(() => {})}>
          <TextInput label="Full name" placeholder="Jeffrey Benson" size="md" />

          {type === "register" && (
            <Select
              label="Select your class"
              placeholder="Class"
              data={["JSS1", "JSS2", "SS1"]}
              mt="md"
              size="md"
              clearable
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
