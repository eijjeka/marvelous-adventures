import { ComicsCard } from "../ComicsCard/ComicsCard";
import { ComicsList } from "./ComicsList.styled";

export const ComicsCardList = ({ data, setIdCurrentCard, setModalIsOpen }) => {
  return (
    <ComicsList>
      {data &&
        data.map((item) => {
          return (
            <ComicsCard
              key={item.id}
              setIdCurrentCard={setIdCurrentCard}
              setModalIsOpen={setModalIsOpen}
              data={item}
            />
          );
        })}
    </ComicsList>
  );
};
