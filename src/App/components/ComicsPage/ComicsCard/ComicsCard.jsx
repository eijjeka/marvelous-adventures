import {
  Wrapper,
  InnerImage,
  Image,
  InnerDescription,
  Name,
  Author,
} from "./ComicsCard.styled";

export const ComicsCard = ({ data: { thumbnail, title, creators } }) => {
  return (
    <Wrapper>
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
