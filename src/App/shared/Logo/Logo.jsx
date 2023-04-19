import { Link } from "react-router-dom";
import { IconSvg } from "../IconSvg";
import logo from "App/assets/images/sprite.svg";

//please import logo image and add to attribute path, don't forget enter description of image
//Link - the logo image wrapper where we go

export const Logo = () => {
  return (
    <Link to="/">
      <IconSvg path={logo + "#icon-logo-svg"} alt="logo" wh={98} hg={15} />
    </Link>
  );
};
