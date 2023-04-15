import { Link } from "react-router-dom";
import { ContainerImage } from "../ContainerImage";
import logo from "App/assets/logo.svg";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <ContainerImage path={logo} alt={Logo} />
      </Link>
    </>
  );
};
