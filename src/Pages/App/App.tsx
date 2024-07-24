import LegoBrick from "../../Components/LegoBrick";
import { LegoColor } from "../../Components/LegoBrickConstants";
import PerspectiveScene from "../../Modules/PerspectiveScene";
import "./App.css";
function App() {
  return (
    <>
      <PerspectiveScene>
        <LegoBrick
          stud_width={2}
          stud_depth={4}
          color={LegoColor.Blue}
          coord={[0, 0, 0]}
        />
        <LegoBrick
          stud_width={2}
          stud_depth={4}
          color={LegoColor.Red}
          coord={[0, 4, 0]}
        />
        <LegoBrick
          stud_width={4}
          stud_depth={2}
          color={LegoColor.Red}
          coord={[2, 0, 0]}
        />
        <LegoBrick
          stud_width={2}
          stud_depth={4}
          color={LegoColor.Blue}
          coord={[0, 2, 1]}
        />
        <LegoBrick
          stud_width={2}
          stud_depth={2}
          color={LegoColor.Green}
          coord={[0, 6, 1]}
        />
        {/* <LegoBrick
          stud_width={4}
          stud_depth={2}
          color={LegoColor.Brown}
          coord={[0, 0, 1]}
        /> */}
        <LegoBrick
          stud_width={2}
          stud_depth={2}
          color={LegoColor.Green}
          coord={[4, 0, 1]}
        />
        <LegoBrick
          stud_width={2}
          stud_depth={4}
          color={LegoColor.Red}
          coord={[0, 4, 2]}
        />
      </PerspectiveScene>
    </>
  );
}

export default App;
