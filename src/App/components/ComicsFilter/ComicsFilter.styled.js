import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => (width ? width : "100%")};
  font-size: 12px;
  line-height: 1.17;

  color: rgba(250, 250, 250, 0.3);
`;
export const WrapInput = styled.span`
  position: relative;
`;

export const InputText = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px 46px 14px 24px;
  color: var(--main-text-color);
  background-color: var(--accent-color);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  &::placeholder {
    color: var(--main-text-color);
  }
`;

export const WrapperSelect = styled.div`
  display: flex;

  gap: 8px;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
`;

export const Select = styled.select`
  /* width: 50%; */
  font-size: 14px;
  line-height: 1.29px;
  padding: 14px 24px;
  color: var(--main-text-color);
  background: #171717;
  border: 2px solid var(--accent-color);
  border-radius: 100px;
`;

export const Option = styled.option`
  border-radius: 100px;
  padding: 40px;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(250, 250, 250, 0.3);
  color: tomato; /* измените цвет текста на свой */
`;
