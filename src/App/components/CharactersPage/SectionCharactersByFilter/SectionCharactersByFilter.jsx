import { InputSearchByText } from "App/shared/InputSearchByText/InputSearchByText";
import {
  FilterForm,
  LabelSearch,
  LabelStartWith,
  LabelOrderBy,
  LabelDate,
} from "./SectionCharactersByFilter.styled";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "App/shared/CustomSelect/CustomSelect";
import { useContext, useState } from "react";
import { CharactersContext } from "App/views/Characters/CharactersContext";

const data = ["Modified", "Name"];
const date = [
  "27/02/2021",
  "27/03/2021",
  "27/2/2021",
  "7/02/2021",
  "22/02/2021",
  "27/02/2090",
];

export const SectionCharactersByFilter = () => {
  const { setName } = useContext(CharactersContext);

  return (
    <Container>
      <FilterForm>
        <LabelSearch>
          Comics
          <InputSearchByText func={setName} placeholder={"Enter text"} />
        </LabelSearch>
        <LabelStartWith>
          Name Starts With
          <InputSearchByText placeholder={"Enter text"} />
        </LabelStartWith>
        <LabelOrderBy>
          Order by
          <CustomSelect options={data} />
        </LabelOrderBy>
        <LabelDate>
          Date
          <CustomSelect options={date} />
        </LabelDate>
      </FilterForm>
    </Container>
  );
};
