import LegoBrick from "../../Components/LegoBrick";
import { LegoColor } from "../../Components/LegoBrickConstants";
import PerspectiveScene from "../../Modules/PerspectiveScene";
import "./App.css";
function App() {
  return (
    <>
      <PerspectiveScene>
        <LegoBrick stud_width={2} stud_depth={4} color={LegoColor.Blue} />
      </PerspectiveScene>
    </>
  );
}

export default App;
