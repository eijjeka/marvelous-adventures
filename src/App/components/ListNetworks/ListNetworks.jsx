import { List, Item, LinkItem } from "./ListNetworks.styled";
import { IconSvg } from "App/shared/IconSvg";
import logo from "App/assets/images/sprite.svg";

export const ListNetworks = () => {
  return (
    <List>
      <Item pg="8px 13px">
        <LinkItem>
          <IconSvg path={logo + "#facebook"} wh={8} hg={15} />
        </LinkItem>
      </Item>
      <Item pg="8px 10px">
        <LinkItem>
          <IconSvg path={logo + "#istagram"} wh={14} hg={14} />
        </LinkItem>
      </Item>
      <Item pg="8px 10px">
        <LinkItem>
          <IconSvg path={logo + "#twitter"} wh={14} hg={14} />
        </LinkItem>
      </Item>
    </List>
  );
};
