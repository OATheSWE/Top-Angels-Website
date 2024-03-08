import "@mantine/core/styles.css";
import { Slot } from "expo-router";
import "../../global.css";
import { Footer, SubHeader } from "../../src/components";

const App = () => {
  return (
    <>
      <SubHeader />
      <Slot />
      <Footer />
    </>
  );
};

export default App;
