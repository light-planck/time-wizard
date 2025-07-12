import type { FC } from "react";

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: FC<Props> = ({ width, height, className }) => {
  return (
    <div className={className}>
      <img
        alt="logo icon"
        src="logo.svg"
        width={width ?? 100}
        height={height ?? 100}
        className="w-full h-full"
      />
    </div>
  );
};
