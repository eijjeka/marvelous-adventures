import { useEffect, useState } from "react";
import icon from "App/assets/images/sprite.svg";
import * as API from "App/services/services";
import { Modal } from "App/components/Modal";

import { MainLoader } from "App/shared/MainLoader/MainLoader";
import {
  ModalWrapper,
  CloseBtn,
  Svg,
  WrapperImages,
  InnerMainImg,
  MainImg,
  DescriptionWrapper,
  Name,
} from "./ComicsModal.styled";

export const ComicsModal = ({ id, setActive }) => {
  const [comics, setComics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const comics = API.getComicsById(id);
      console.log("comics: ", comics);
      const charters = API.getComicsCharactersById(id);
      console.log("charters: ", charters);
      const creators = API.getComicsCreatorsById(id);
      console.log("creators: ", creators);

      const data = await Promise.all([comics, charters, creators]);
      console.log("data: ", data);

      return data;
    };

    getData()
      .then((data) => console.log("data: ", data))
      .catch(console.error)
      .finally(() => setLoading(false));
    // API.getComicsById(id).then((data) => {
    //   console.dir(data);
    //   setComics(data);
    //   setLoading(false);
    // });
  }, [id]);

  const normalizeTitle = (title) => {
    const startIndexForRemove = title.indexOf("#");
    return title.substring(0, startIndexForRemove);
  };
  // useEffect(() => {
  //   if (comics.length === 0) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }, [comics]);
  // useEffect(() => {
  //   const data = API.getComicsById(id).then(console.log);
  // });
  return (
    <Modal setActive={setActive}>
      {loading && <MainLoader />}
      {comics && (
        <ModalWrapper>
          <CloseBtn onClick={() => setActive(false)}>
            <Svg>
              <use href={icon + "#icon-close"} />
            </Svg>
          </CloseBtn>
          <WrapperImages>
            <InnerMainImg>
              <MainImg
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
            </InnerMainImg>
          </WrapperImages>
          <DescriptionWrapper>
            <Name>{normalizeTitle(comics.title)}</Name>
          </DescriptionWrapper>
        </ModalWrapper>
      )}
    </Modal>
  );
};
