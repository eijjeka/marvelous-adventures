import {
  Wrapper,
  InnerImage,
  Image,
  InnerDescription,
  Name,
  Author,
} from "./ComicsCard.styled";

export const ComicsCard = ({
  data: { thumbnail, title, creators, id },
  setIdCurrentCard,
  setModalIsOpen,
}) => {
  const handleClick = (id) => {
    setIdCurrentCard(id);
    setModalIsOpen(true);
  };
  return (
    <Wrapper onClick={() => handleClick(id)} id={id}>
      <InnerImage>
        <Image src={`${thumbnail.path}.${thumbnail.extension}`} />
      </InnerImage>
      <InnerDescription>
        <Name>{title}</Name>
        <Author>{creators?.items[0]?.name || "marvel"}</Author>
      </InnerDescription>
    </Wrapper>
  );
};
