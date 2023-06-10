import { InputSearchByText } from "App/shared/InputSearchByText/InputSearchByText";
import {
  FilterForm,
  LabelSearch,
  LabelStartWith,
  CustomSelectWrapper,
  LabelOrderBy,
  LabelDate,
} from "./CharactersFilter.styled";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "App/shared/CustomSelect/CustomSelect";
import { useContext } from "react";
import { CharactersContext } from "App/views/Characters/CharactersContext";
import { CustomDayPicker } from "App/shared/DayPicker/DayPicker";

const data = ["modified", "name"];

const date = [
  "27/02/2021",
  "27/03/2021",
  "27/2/2021",
  "7/02/2021",
  "22/02/2021",
  "27/02/2090",
];

export const CharactersFilter = () => {
  const { setName, setNameComics, setDate, setOrder } =
    useContext(CharactersContext);

  return (
    <Container>
      <FilterForm>
        <LabelSearch>
          Comics
          <InputSearchByText
            getStateByInput={setNameComics}
            placeholder={"Enter text"}
          />
        </LabelSearch>
        <CustomSelectWrapper>
          <LabelStartWith>
            Name Starts With
            <InputSearchByText
              bgcolor={"#171717"}
              getStateByInput={setName}
              placeholder={"Enter text"}
            />
          </LabelStartWith>
          <LabelOrderBy>
            Order by
            <CustomSelect onSelect={setOrder} options={data} />
          </LabelOrderBy>
          <LabelDate>
            Date
            <CustomDayPicker setDate={setDate} />
          </LabelDate>
        </CustomSelectWrapper>
      </FilterForm>
    </Container>
  );
};
