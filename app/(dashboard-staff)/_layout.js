import { StaffNav } from "../../src/components";
import { Slot } from "expo-router";

const App = () => {
  return (
    <div>
      <StaffNav />
      <Slot />
    </div>
  );
};

export default App;
