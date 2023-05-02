import { List, LinkItem, InnerWrapper, PolicyWrapper } from "./Footer.styled";
import { ListNetworks } from "App/components/ListSocialNetworks";
import { Logo } from "App/shared/Logo";

export const Footer = () => {
  return (
    <footer>
      <InnerWrapper>
        {/* logo */}
        <Logo />
        {/* list link to page in footer */}
        <List>
          <li>
            <LinkItem>Characters</LinkItem>
          </li>
          <li>
            <LinkItem>Comics</LinkItem>
          </li>
        </List>
        {/* list social network  */}
        <ListNetworks />
      </InnerWrapper>
      {/* policy text */}
      <PolicyWrapper>Privacy Policy Public Offering Agreement</PolicyWrapper>
    </footer>
  );
};
