import "./LegoBrick.css";
import { LegoColor } from "./LegoBrickConstants";

const LEGO_GROWTH_FACTOR = 10;
const LEGO_STUD_HEIGHT = 6;
const LEGO_STUD_WIDTH = 5;
const LEGO_STUD_DIAMETER = 3;

interface LegoBrickProps {
  stud_width: number;
  stud_depth: number;
  color: LegoColor;
}

export default function LegoBrick({
  stud_width,
  stud_depth,
  color,
}: LegoBrickProps) {
  const width = stud_width * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH;
  const depth = stud_depth * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH;
  const height = LEGO_STUD_HEIGHT * LEGO_GROWTH_FACTOR;
  const diameter = LEGO_STUD_DIAMETER * LEGO_GROWTH_FACTOR;

  const stud_coord_array = Array.from([...Array(stud_depth).keys()], (x) =>
    Array.from([...Array(stud_width).keys()], (y) => [x, y])
  ).flat(); // Console log this if you wanna see what it does, its easier to understand that way
  //   console.log(stud_coord_array);

  //Formerly top positioning
  const studZPosition = (x: number) =>
    -depth / 2 + // Center stud on top edge
    (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
    LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * x; // Subsequent studs check coords

  //Formerly left positining
  const studXPosition = (x: number) =>
    -diameter / 2 + // Center stud on left edge
    (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
    LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * x; // Subsequent studs check coords

  return (
    <div>
      <div className="brick-position" style={{ position: "absolute" }}>
        <div className="brick brick-pers">
          <div
            className="brick-F brick-face-F brick-face"
            style={{
              width: width,
              height: height,
              background: color,
              transform: `rotateY(0deg) translateZ(${depth / 2}px)`,
            }}
          ></div>
          <div
            className="brick-R brick-face-R brick-face"
            style={{
              width: depth,
              height: height,
              background: color,
              left: (-1 * (depth - width)) / 2, // Centering the right face
              transform: `rotateY(90deg) translateZ(${width / 2}px)`,
            }}
          ></div>
          <div
            className="brick-U brick-face-U brick-face"
            style={{
              width: width,
              height: depth,
              background: color,
              top: (-1 * (depth - height)) / 2, // Centering the top face
              transform: `rotateX(90deg) translateZ(${height / 2}px)`,
            }}
          ></div>

          {stud_coord_array.map((x) => (
            <div
              style={{
                position: "absolute",
                transform: `translateZ(${studZPosition(
                  x[0]
                )}px) translateX(${studXPosition(x[1])}px)`,
                zIndex: 10,
                transformStyle: "preserve-3d",

                // top:
                //   -depth / 2 + // Center stud on top edge
                //   (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
                //   LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * x[0], // Subsequent studs check coords
                // left:
                //   -diameter / 2 + // Center stud on left edge
                //   (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
                //   LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * x[1], // Subsequent studs check coords
              }}
            >
              <div
                className="stud-U"
                style={{ top: (-1 * diameter) / 2 - 10, background: color }}
              ></div>
              <div
                className="stud-R"
                style={{ top: (-1 * diameter) / 2 + 5, background: color }}
              ></div>
              <div
                className="stud-B"
                style={{ top: (-1 * diameter) / 2, background: color }}
              ></div>
            </div>
          ))}
          {/* <div>
            <div className="stud-U"></div>
            <div className="stud-F"></div>
            <div className="stud-B"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
