import { Image } from "./ContainerImage.styled";

export const ContainerImage = ({ path, alt, ...props }) => {
  return <Image src={path} alt={alt} {...props} />;
};
