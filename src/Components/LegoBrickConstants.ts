export enum LegoColor {
  Blue = "#006bb7",
  Red = "#dd1a21",
  Green = "#9ac93b",
  Brown = "#692e14",
}

// First nubmer is width is studs, second is depth in studs, the brick grows left and back
export type Coord = [number, number, number];

const ANGLE_FROM_ABOVE = 25;
export const Y_ROTATE_ANGLE = -45;

// Correct View: `rotateX(-${ANGLE_FROM_ABOVE}deg) rotateY(${Y_ROTATE_ANGLE}deg)`;
// Top Down View: "rotateX(-90deg)";
export const BRICK_ORIENTATION = `rotateX(-${ANGLE_FROM_ABOVE}deg) rotateY(${Y_ROTATE_ANGLE}deg)`;
