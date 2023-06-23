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
