import { Audio } from "react-loader-spinner";

interface ILoadingProps {
  color?: string;
  height?: number;
  width?: number;
}

const Loading: React.FC<ILoadingProps> = ({ color, height, width }) => {
  return (
    <Audio
      color={color || "#ffffff"}
      height={height || 60}
      width={width || 60}
    />
  );
};

export default Loading;
