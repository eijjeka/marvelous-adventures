import { useEffect, useState } from "react";
import moment from "moment";
import icon from "App/assets/images/sprite.svg";
import * as API from "App/services/services";
import { Modal } from "App/components/Modal";

import { MainLoader } from "App/shared/MainLoader/MainLoader";
import {
  ModalWrapper,
  CloseBtn,
  Svg,
  InnerMainImg,
  MainImg,
  DescriptionWrapper,
  Name,
  WrapForAuthorAndModified,
  Author,
  ModifiedDate,
  Description,
  DetailsList,
} from "./ComicsModal.styled";

export const ComicsModal = ({ id, setActive }) => {
  const [comics, setComics] = useState(null);
  const [imgIsLoad, setImgIsLoad] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await API.getComicsById(id);
      setComics(data);
      return data;
    };

    getData()
      .then((data) =>
        console.log("modified: ", moment(data.modified).format("MMMM DD YYYY"))
      )
      .catch(() => {
        setLoading(false);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const normalizeTitle = (title) => {
    const startIndexForRemove = title.indexOf("#");
    return title.substring(0, startIndexForRemove);
  };

  const handleImageLoad = () => {
    setImgIsLoad(true);
  };

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
          {/* <WrapperImages> */}
          <InnerMainImg>
            <MainImg
              onLoad={handleImageLoad}
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
            />
          </InnerMainImg>
          {/* </WrapperImages> */}
          {imgIsLoad && (
            <>
              <DescriptionWrapper>
                <Name>{normalizeTitle(comics.title)}</Name>
                <WrapForAuthorAndModified>
                  <Author>{comics.creators?.items[0]?.name || "Author"}</Author>
                  <ModifiedDate>
                    {moment(comics.modified).format("MMMM DD YYYY")}
                  </ModifiedDate>
                </WrapForAuthorAndModified>
                <Description>{comics.description}</Description>
              </DescriptionWrapper>

              <DetailsList></DetailsList>
            </>
          )}
        </ModalWrapper>
      )}
    </Modal>
  );
};
