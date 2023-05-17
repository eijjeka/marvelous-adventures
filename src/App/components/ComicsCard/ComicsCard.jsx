import {
  Wrapper,
  InnerImage,
  Image,
  InnerDescription,
  Name,
  Author,
} from "./../../shared/Wrapper/Wrapper";

export const ComicsCard = () => {
  return (
    <Wrapper>
      <InnerImage>
        <Image />
      </InnerImage>
      <InnerDescription>
        <Name />
        <Author />
      </InnerDescription>
    </Wrapper>
  );
};
