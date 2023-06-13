import {
  Wrapper,
  InnerImage,
  Image,
  InnerDescription,
  Name,
  Author,
} from "./ComicsCard.styled";

export const ComicsCard = ({ data: { thumbnail, title, id } }) => {
  return (
    <Wrapper>
      <InnerImage>
        <Image src={`${thumbnail.path}.${thumbnail.extension}`} />
      </InnerImage>
      <InnerDescription>
        <Name>{title}</Name>
        <Author>{id}</Author>
      </InnerDescription>
    </Wrapper>
  );
};
