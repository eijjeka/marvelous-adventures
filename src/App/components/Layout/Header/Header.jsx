import { Wrapper, InnerWrapper } from "./Header.styled";
import { Logo } from "../../../shared/Logo";
import { InputSearch } from "App/components/InputSearch/InputSearch";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper scroll={isScrolled}>
      <InnerWrapper>
        <Logo />
        <InputSearch type="text" placeholder="Search" />
      </InnerWrapper>
    </Wrapper>
  );
};
