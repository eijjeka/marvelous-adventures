import {
  Wrapper,
  InnerImage,
  Image,
  InnerDescription,
  Name,
  Author,
} from "./../../shared/Wrapper/Wrapper";

export const ComicsCard = ({ path, name, author }) => {
  return (
    <Wrapper>
      <InnerImage>
        <Image src={path} />
      </InnerImage>
      <InnerDescription>
        <Name>{name}</Name>
        <Author>{author}</Author>
      </InnerDescription>
    </Wrapper>
  );
};
