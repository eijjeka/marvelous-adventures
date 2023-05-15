import { MutatingDots } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled.js";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#e74941"
        secondaryColor="#ffffff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
