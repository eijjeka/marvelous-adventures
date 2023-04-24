import { Wrapper, CardTitle, CardText } from "./CharactersCard.styled";

export const CharactersCard = ({ item, handleClick }) => {
  const { name, description } = item;

  return (
    <Wrapper onClick={() => handleClick(item)}>
      {/* <CardImg src={`${thumbnail.path}.${thumbnail.extension}`} /> */}
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
    </Wrapper>
  );
};
