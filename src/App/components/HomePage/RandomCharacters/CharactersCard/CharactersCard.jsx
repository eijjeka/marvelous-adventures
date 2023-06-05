import { Wrapper, CardTitle, CardText } from "./CharactersCard.styled";

export const CharactersCard = ({ item, handleClick, active }) => {
  const { name, description, id } = item;

  return (
    <Wrapper onClick={() => handleClick(item)}>
      <CardTitle active={active} id={id}>
        {name}
      </CardTitle>
      <CardText active={active} id={id}>
        {description}
      </CardText>
    </Wrapper>
  );
};
