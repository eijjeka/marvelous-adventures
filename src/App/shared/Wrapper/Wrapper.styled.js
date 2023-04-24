import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: ${({ dis }) => dis};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ fldir }) => fldir};
  align-items: ${({ ai }) => ai};
  justify-content: ${({ jc }) => jc};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;
