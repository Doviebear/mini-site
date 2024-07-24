export enum LegoColor {
  Blue = "#006bb7",
  Red = "#dd1a21",
}

const ANGLE_FROM_ABOVE = 25;

//When looking at from front view, how do you want Lego Brick oriented
export enum Orientation {
  FrontLeft = `rotateX(-${ANGLE_FROM_ABOVE}deg) rotateY(-45deg)`,
  FrontRight = `rotateX(-${ANGLE_FROM_ABOVE}deg) rotateY(45deg)`,
}
