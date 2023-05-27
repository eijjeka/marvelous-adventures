import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "./../../shared/CustomSelect/CustomSelect";
import icon from "App/assets/images/sprite.svg";

import {
  FilterForm,
  Label,
  InputText,
  WrapperSelect,
  Svg,
  WrapInput,
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
          <Label>
            Title Starts With
            <WrapInput>
              <InputText placeholder="Enter text" />
              <Svg>
                <use href={icon + "#icon-search"} />
              </Svg>
            </WrapInput>
          </Label>
          <WrapperSelect>
            <Label>
              Format
              <CustomSelect options={optionsSelectFormat} />
            </Label>
            <Label>
              Order by
              <CustomSelect options={optionsSelectOrder} />
            </Label>
          </WrapperSelect>
        </FilterForm>
      </Container>
    </Section>
  );
};
