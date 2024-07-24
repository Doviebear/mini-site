import "./LegoBrick.css";
import {
  BRICK_ORIENTATION,
  Coord,
  LegoColor,
  Y_ROTATE_ANGLE,
} from "./LegoBrickConstants";

const LEGO_GROWTH_FACTOR = 10;
const LEGO_STUD_HEIGHT = 6;
const LEGO_STUD_WIDTH = 5;
const LEGO_STUD_DIAMETER = 3;

interface LegoBrickProps {
  stud_width: number;
  stud_depth: number;
  color: LegoColor;
  coord: Coord;
}

export default function LegoBrick({
  stud_width,
  stud_depth,
  color,
  coord,
}: LegoBrickProps) {
  const width = stud_width * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH;
  const depth = stud_depth * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH;
  const height = LEGO_STUD_HEIGHT * LEGO_GROWTH_FACTOR;
  const diameter = LEGO_STUD_DIAMETER * LEGO_GROWTH_FACTOR;

  const stud_coord_array = Array.from([...Array(stud_depth).keys()], (x) =>
    Array.from([...Array(stud_width).keys()], (y) => [x, y])
  ).flat(); // Console log this if you wanna see what it does, its easier to understand that way

  //Formerly top positioning
  const studZPosition = (stud_depth_index: number) =>
    -depth + // Center stud on top edge
    (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
    LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * stud_depth_index; // Subsequent studs check coords

  //Formerly left positining
  const studXPosition = (stud_width_index: number) =>
    -diameter / 2 + // Center stud on left edge
    (LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR) / 2 + // Move first stud to position
    LEGO_STUD_WIDTH * LEGO_GROWTH_FACTOR * stud_width_index; // Subsequent studs check coords

  const XTranslate =
    -1 * coord[0] * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH -
    LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH * stud_width; // The offest to get the grid centered on the screen

  const YTranslate = -1 * coord[2] * LEGO_GROWTH_FACTOR * LEGO_STUD_HEIGHT;

  const ZTranslate = -1 * coord[1] * LEGO_GROWTH_FACTOR * LEGO_STUD_WIDTH;

  const positioningTransform = `translateX(${XTranslate}px) translateZ(${ZTranslate}px) translateY(${YTranslate}px)`;

  const zIndex = (coord[2] + 1) * 100 - (coord[0] + coord[1]); //Goes down as goes back, each level up adds 100

  return (
    <div className="brick-position" style={{ position: "absolute" }}>
      <div
        className="brick"
        style={{
          transformOrigin: "right center",
          transform: BRICK_ORIENTATION + positioningTransform,
          zIndex: zIndex,
        }}
      >
        <div
          className="brick-F brick-face"
          style={{
            width: width,
            height: height,
            background: color,
            // transform: `rotateY(0deg) translateZ(${depth / 2}px)`,
          }}
        ></div>
        <div
          className="brick-R brick-face"
          style={{
            width: depth,
            height: height,
            background: color,
            left: (-1 * (depth - width)) / 2, // Centering the right face
            transform: `rotateY(90deg) translateZ(${width / 2}px) translateX(${
              depth / 2
            }px)`,
          }}
        ></div>
        <div
          className="brick-U brick-face"
          style={{
            width: width,
            height: depth,
            background: color,
            top: (-1 * (depth - height)) / 2, // Centering the top face
            transform: `rotateX(90deg) translateZ(${
              height / 2
            }px) translateY(-${depth / 2}px)`,
          }}
        ></div>

        {stud_coord_array.map((x) => (
          <div
            style={{
              position: "absolute",
              transform: `translateZ(${studZPosition(
                x[0]
              )}px) translateX(${studXPosition(x[1])}px) `,
              zIndex: zIndex + 100, //Acts as the level above it
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="stud-U"
              style={{
                top: (-1 * diameter) / 2 - 10,
                background: color,
                height: diameter,
                width: diameter,
              }}
            ></div>
            <div
              className="stud-R"
              style={{
                top: (-1 * diameter) / 2 + 5,
                background: color,
                height: diameter / 3,
                width: diameter,
                transform: `rotateY(${-1 * Y_ROTATE_ANGLE}deg)`,
              }}
            ></div>
            <div
              className="stud-B"
              style={{
                top: (-1 * diameter) / 2,
                background: color,
                height: diameter,
                width: diameter,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
