import { ComicsCard } from "../ComicsCard/ComicsCard";
import { ComicsList } from "./ComicsList.styled";

export const ComicsCardList = (data) => {
  return (
    <ComicsList>
      {data &&
        data.map((item) => {
          return <ComicsCard />;
        })}
    </ComicsList>
  );
};
