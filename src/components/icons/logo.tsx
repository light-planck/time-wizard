import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const Logo: FC<Props> = ({ width, height }) => {
  return (
    <div>
      <img src="logo.svg" width={width ?? 100} height={height ?? 100} />
    </div>
  );
};
