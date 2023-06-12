import { ComicsCard } from "../ComicsCard/ComicsCard";
import { ComicsList } from "./ComicsList.styled";

export const ComicsCardList = ({ data }) => {
  console.log("data: ", data);

  return (
    <ComicsList>
      {data &&
        data.map((item) => {
          console.log("item: ", item);

          return <ComicsCard key={item.id} data={item} />;
        })}
    </ComicsList>
  );
};
