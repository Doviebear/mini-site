import "./PerspectiveScene.css";

interface PerspectiveSceneProps {
  children: React.ReactNode;
}

export default function PerspectiveScene({ children }: PerspectiveSceneProps) {
  return <div className="scene">{children}</div>;
}
