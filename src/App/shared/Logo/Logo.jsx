import { Link } from "react-router-dom";
import { ContainerImage } from "../ContainerImage";
import logo from "App/assets/logo.svg";

//please import logo image and add to attribute path, don't forget enter description of image
//Link - the logo image wrapper where we go

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <ContainerImage path={logo} alt={Logo} />
      </Link>
    </>
  );
};
