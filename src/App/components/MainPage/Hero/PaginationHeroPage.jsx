import styled from "styled-components";
import heros from "App/assets/data/hero.json";

const PaginationList = styled.ul`
  position: absolute;
  bottom: 524px;
  right: 351px;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  list-style: none;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
    bottom: -41px;
    right: 50%;
    transform: translateX(50%);
  }
  @media ${(props) => props.theme.media.desktop} {
    flex-direction: column;
    width: auto;

    right: 768px;
    bottom: -9px;
  }
`;
const PaginationItem = styled.li``;
const PaginationButton = styled.button`
  width: 4px;
  height: 72px;
  background-color: ${({ colorBg }) =>
    colorBg ? colorBg : "rgba(23, 23, 23, 0.8)"};

  border: none;
  @media ${(props) => props.theme.media.tablet} {
    width: 100px;
    height: 4px;
  }
  @media ${(props) => props.theme.media.desktop} {
    width: 4px;
    height: 100px;
  }
`;

export const PaginationHeroPage = ({ name }) => {
  return (
    <PaginationList>
      {heros.map((item, index) => {
        return (
          <PaginationItem key={index}>
            <PaginationButton
              colorBg={item.name === name ? item.colors.main : null}
            />
          </PaginationItem>
        );
      })}
    </PaginationList>
  );
};
