import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "./../../shared/CustomSelect/CustomSelect";
import {
  FilterForm,
  Label,
  InputText,
  WrapperSelect,
  Select,
  Option,
} from "./ComicsFilter.styled";

export const ComicsFilter = (second) => {
  const optionsSelect = [
    "Comic",
    "Magazine",
    "Trade paperback",
    "Hardcover",
    "Digest",
    "Graphic novel",
    "Digital comic",
    "Infinite comic",
  ];

  return (
    <Section>
      <Container>
        <FilterForm>
          <Label>
            Title Starts With
            <InputText placeholder="Enter text" />
          </Label>
          <WrapperSelect>
            <Label>
              Format
              <CustomSelect options={optionsSelect} />
            </Label>
            <Label>
              Order by
              <Select>
                <Option>Title</Option>
                <Option>On Sale Date</Option>
              </Select>
            </Label>
          </WrapperSelect>
        </FilterForm>
      </Container>
    </Section>
  );
};
