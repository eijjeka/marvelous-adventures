import { Wrapper, InnerWrapper } from "./Header.styled";
import { Logo } from "../../../shared/Logo";
import { InputSearch } from "App/components/InputSearch/InputSearch";

export const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <InputSearch type="text" placeholder="Search" />
      </InnerWrapper>
    </Wrapper>
  );
};
