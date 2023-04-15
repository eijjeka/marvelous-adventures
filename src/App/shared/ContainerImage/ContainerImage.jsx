export const ContainerImage = ({ path, alt, ...props }) => {
  return <img src={path} alt={alt} {...props} />;
};
