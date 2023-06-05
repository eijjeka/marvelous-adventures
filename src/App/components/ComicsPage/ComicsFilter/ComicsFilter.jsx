import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "App/shared/CustomSelect/CustomSelect";
import { InputSearchByText } from "../../../shared/InputSearchByText/InputSearchByText";
import { CustomDayPicker } from "./../../../shared/DayPicker/DayPicker";
import {
  FilterForm,
  WrapperSelect,
  LabelSearch,
  LabelFormatSelect,
  LabelOderSelect,
  LabelData,
  WrapperDate,
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
          <WrapperDate>
            <LabelData>Start Year</LabelData>
            <CustomDayPicker />
          </WrapperDate>
        </FilterForm>
      </Container>
    </Section>
  );
};
