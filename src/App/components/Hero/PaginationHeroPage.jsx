import styled from "styled-components";

const PaginationList = styled.ul`
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  list-style: none;
  @media ${(props) => props.theme.media.tablet} {
    width: 100px;
    flex-direction: row;
  }
  @media ${(props) => props.theme.media.desktop} {
    flex-direction: column;
  }
`;
const PaginationItem = styled.li``;
const PaginationButton = styled.button`
  width: 4px;
  height: 72px;
  background-color: ${({ colorBg, current }) =>
    current ? colorBg : "rgba(23, 23, 23, 0.8)"};

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

export const PaginationHeroPage = ({ heros }) => {
  console.log(heros);
  return (
    <PaginationList>
      {heros.map((item, index) => {
        return (
          <PaginationItem key={index}>
            <PaginationButton colorBg={item.colors.main} />
          </PaginationItem>
        );
      })}
    </PaginationList>
  );
};
