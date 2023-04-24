import {
  Wrapper,
  List,
  ListItem,
  LinkItem,
  InnerWrapper,
  PolicyWrapper,
} from "./Footer.styled";
import { ListNetworks } from "App/components/ListSocialNetworks";
import { Logo } from "App/shared/Logo";

export const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        {/* logo */}
        <Logo />
        {/* list link to page in footer */}
        <List>
          <ListItem>
            <LinkItem>Characters</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem>Comics</LinkItem>
          </ListItem>
        </List>
        {/* list social network  */}
        <ListNetworks />
      </InnerWrapper>
      {/* policy text */}
      <PolicyWrapper>Privacy Policy Public Offering Agreement</PolicyWrapper>
    </Wrapper>
  );
};
