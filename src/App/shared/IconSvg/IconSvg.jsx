import { Svg } from "./IconSvg.styled";

//path - path your image svg in sprite
//color - color fill your svg
//wh - width
//hg - height
//pd - padding exp. 4px

export const IconSvg = ({ path, color, wh, hg, pd }) => {
  return (
    <svg width={wh} height={hg}>
      <use href={path} fill={color} />
    </svg>
  );
};
