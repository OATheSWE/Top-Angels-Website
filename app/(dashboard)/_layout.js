import { Slot } from "expo-router";
import { DashBoardNav } from "../../src/components";

const App = () => {
  return (
    <div>
      <DashBoardNav />
      <Slot />
    </div>
  );
};

export default App;
