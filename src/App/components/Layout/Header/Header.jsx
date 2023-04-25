import { WrapperHeader } from "./Header.styled";
import { Logo } from "../../../shared/Logo";
import { InputSearch } from "App/components/InputSearch/InputSearch";

export const Header = () => {
  console.log("🚀 ~ file: Header.jsx:14 ~ Header ~ Header:", Header);
  return (
    <WrapperHeader>
      <Logo />
      <InputSearch type="text" placeholder="Search" />
    </WrapperHeader>
  );
};
