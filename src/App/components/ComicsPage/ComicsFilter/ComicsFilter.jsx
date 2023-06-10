import { Section } from "App/shared/Section/Section";
import { Container } from "App/shared/Container/Container";
import { CustomSelect } from "App/shared/CustomSelect/CustomSelect";
import { InputSearchByText } from "../../../shared/InputSearchByText/InputSearchByText";
import { CustomDayPicker } from "./../../../shared/DayPicker/DayPicker";
import { getComicsByFilter } from "App/services/services.js";
import { useState, useEffect } from "react";
import { ComicsCardList } from "App/components/ComicsPage/ComicsList/ComicsList";
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
  const [Data, setData] = useState();
  const [title, setTitle] = useState();
  const [format, setFormat] = useState();
  const [order, setOrder] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    console.log(order);
    const orderBy = order === "Title" ? order.toLowerCase() : "onsaleDate";

    getComicsByFilter(
      title?.toLowerCase(),
      format?.toLowerCase(),
      orderBy,
      date
    ).then((data) => setData(data.results));
  }, [title, format, order, date]);

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
            <InputSearchByText
              getStateByInput={setTitle}
              placeholder="Enter text"
            />
          </LabelSearch>
          <WrapperSelect>
            <LabelFormatSelect>
              Format
              <CustomSelect
                onSelect={setFormat}
                options={optionsSelectFormat}
              />
            </LabelFormatSelect>
            <LabelOderSelect>
              Order by
              <CustomSelect onSelect={setOrder} options={optionsSelectOrder} />
            </LabelOderSelect>
          </WrapperSelect>
          <WrapperDate>
            <LabelData>Start Year</LabelData>
            <CustomDayPicker setDate={setDate} />
          </WrapperDate>
        </FilterForm>
        {Data && <ComicsCardList data={Data} />}
      </Container>
    </Section>
  );
};
