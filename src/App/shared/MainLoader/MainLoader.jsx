import styled from "styled-components";
import { Dna } from "react-loader-spinner";
// import { useEffect } from "react";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100wh;
  height: 100vh;
`;

export const MainLoader = (second) => {
  // useEffect(() => {
  //   const dnaContainer = document.getElementsByClassName("dna-wrapper")[0];
  //   const elementsAnimation = dnaContainer.querySelectorAll(
  //     '[fill="rgba(233, 12, 89, 0.5125806451612902)"]'
  //   );
  //   elementsAnimation.forEach((element) => {
  //     element.setAttribute("fill", "#34387F");
  //     console.log(element.getAttribute("fill"));
  //   });
  // }, []);
  return (
    <LoaderWrapper>
      <Dna
        visible={true}
        height="200"
        width="200"
        textAlign="center"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </LoaderWrapper>
  );
};
