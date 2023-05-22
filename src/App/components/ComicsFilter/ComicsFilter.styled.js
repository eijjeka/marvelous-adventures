import styled, { css } from "styled-components";

export const FilterForm = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.17;

  color: rgba(250, 250, 250, 0.3);
`;

export const InputText = styled.input`
  width: 100%;
  height: 46px;
  padding: 14px 0 14px 24px;
  background: #34387f;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 100px;
`;

export const WrapperSelect = styled.div`
  display: flex;
  gap: 8px;
`;

export const Select = styled.select`
  /* width: 50%; */
  font-size: 14px;
  line-height: 1.29px;
  padding: 14px 24px;
  color: #fafafa;
  background: #171717;
  border: 2px solid #34387f;
  border-radius: 100px;
`;

export const Option = styled.option`
  font-size: 12px;
  line-height: 1.17;
  color: rgba(250, 250, 250, 0.3);
`;
