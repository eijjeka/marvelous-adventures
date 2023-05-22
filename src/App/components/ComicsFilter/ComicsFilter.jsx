import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import {
  FilterForm,
  Label,
  InputText,
  WrapperSelect,
  Select,
  Option,
} from "./ComicsFilter.styled";

export const ComicsFilter = (second) => {
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
              <Select>
                <Option>Comic</Option>
                <Option>Magazine</Option>
                <Option>Trade paperback</Option>
                <Option>Hardcover</Option>
                <Option>Digest</Option>
                <Option>Graphic novel</Option>
                <Option>Digital comic</Option>
                <Option>DigInfinite comicest</Option>
              </Select>
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
