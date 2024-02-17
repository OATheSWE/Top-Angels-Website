import { Slot } from "expo-router";
import { NavBar } from "../../src/components";

const App = () => {
  return (
    <div>
      <NavBar />
      <Slot />
    </div>
  );
};

export default App;
