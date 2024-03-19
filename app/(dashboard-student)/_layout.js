import { DashBoardNav } from "../../src/components";
import { Slot } from "expo-router";

const App = () => {
  return (
    <div>
      <DashBoardNav />
      <Slot />
    </div>
  );
};

export default App;
