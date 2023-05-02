import { Link } from "react-router-dom";
import { Svg } from "./Logo.styled";
import logo from "App/assets/images/sprite.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <Svg>
        <use href={logo + "#icon-logo-svg"} />
      </Svg>
    </Link>
  );
};
