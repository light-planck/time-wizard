interface Props {
  width?: number;
  height?: number;
  className?: string;
}

export function Logo({ width, height, className }: Props) {
  return (
    <img
      alt="logo icon"
      src="logo.svg"
      width={width ?? 100}
      height={height ?? 100}
      className={className}
    />
  );
}
