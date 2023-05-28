import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "../../../shared/CustomSelect/CustomSelect";

import { InputSearchByText } from "../../../shared/InputSearchByText/InputSearchByText";
import {
  FilterForm,
  WrapperSelect,
  LabelSearch,
  LabelFormatSelect,
  LabelOderSelect,
  LabelData,
} from "./ComicsFilter.styled";

export const ComicsFilter = (second) => {
  const optionsSelectFormat = [
    "Comic",
    "Magazine",
    "Trade paperback",
    "Hardcover",
    "Digest",
    "Graphic novel",
    "Digital comic",
    "Infinite comic",
  ];

  const optionsSelectOrder = ["Title", "On Sale Date"];

  const fakeOption = ["05/08/2022", "10/12/2022", "23/11/2022"];

  return (
    <Section padding="20px 0 80px">
      <Container>
        <FilterForm>
          <LabelSearch>
            Title Starts With
            <InputSearchByText placeholder="Enter text" />
          </LabelSearch>
          <WrapperSelect>
            <LabelFormatSelect>
              Format
              <CustomSelect options={optionsSelectFormat} />
            </LabelFormatSelect>
            <LabelOderSelect>
              Order by
              <CustomSelect options={optionsSelectOrder} />
            </LabelOderSelect>
          </WrapperSelect>
          <LabelData>
            Start Year
            <CustomSelect options={fakeOption} />
          </LabelData>
        </FilterForm>
      </Container>
    </Section>
  );
};
