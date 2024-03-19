import { Slot } from "expo-router";
import { DashBoardNav, NavBar, NavBar2 } from "../../src/components";

const App = () => {
  return (
    <div className="">
      <NavBar2 />
      {/* <DashBoardNav /> */}
      <Slot />
    </div>
  );
};

export default App;

