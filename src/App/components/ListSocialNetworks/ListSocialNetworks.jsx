import { List, Item, LinkItem } from "./ListSocialNetworks.styled";
import logo from "App/assets/images/sprite.svg";

export const ListNetworks = () => {
  return (
    <List>
      <Item>
        <LinkItem>
          <svg width={10} height={19}>
            <use href={logo + "#facebook"} />
          </svg>
        </LinkItem>
      </Item>
      <Item>
        <LinkItem>
          <svg width={18} height={18}>
            <use href={logo + "#instagram"} />
          </svg>
        </LinkItem>
      </Item>
      <Item>
        <LinkItem>
          <svg width={18} height={18}>
            <use href={logo + "#twitter"} />
          </svg>
        </LinkItem>
      </Item>
    </List>
  );
};
