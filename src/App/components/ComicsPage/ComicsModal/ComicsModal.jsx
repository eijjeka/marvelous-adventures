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
  DetailsItem,
  DetailsTitle,
  DetailsText,
} from "./ComicsModal.styled";

export const ComicsModal = ({ id, setActive }) => {
  const [comics, setComics] = useState(null);
  const [imgIsLoad, setImgIsLoad] = useState(false);
  const [dateRealize, setDateRealize] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await API.getComicsById(id);
      setComics(data);
      return data;
    };

    getData()
      .then((data) => realizeDate(data.dates))
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

  // const normalizeDateRealize = (arr) => {
  //   let firstLater;

  //   arr.map((item) => {
  //     if (item.type === "onsaleDate") {
  //       firstLater = item.date.slice(0, 1);
  //     }
  //     if (item.type === "focDate" && item.date.slice(0, 1) === "-") {
  //       const correctDate = item.date.replace("-", firstLater);
  //       return setDateRealize(moment(correctDate).format("YYYY"));
  //     } else {
  //       console.log(
  //         'moment(arr[1].date).format("YYYY"): ',
  //         moment(arr[1].date).format("YYYY")
  //       );
  //       return setDateRealize(moment(arr[1].date).format("YYYY"));
  //     }
  //   });
  // };

  const realizeDate = (arr) => {
    const arrDates = arr.map((item) => {
      let firstLater;

      if (item.date[0] !== "-") {
        firstLater = item.date[0];
        console.log(firstLater);
        return item;
      } else {
        const correctDate = item.date.replace("-", firstLater);
        return correctDate;
      }
    });

    const filterArr = arrDates.sort((a, b) => {
      return Number.parseInt(a.date) - Number.parseInt(b.date);
    });
    return setDateRealize(moment(filterArr[0].date).format("YYYY"));
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

                <DetailsList>
                  <DetailsItem>
                    <DetailsTitle>Format</DetailsTitle>
                    <DetailsText>{comics.format}</DetailsText>
                  </DetailsItem>
                  <DetailsItem>
                    <DetailsTitle>Year released</DetailsTitle>
                    <DetailsText>{dateRealize}</DetailsText>
                  </DetailsItem>
                  <DetailsItem>
                    <DetailsTitle>Pages</DetailsTitle>
                    <DetailsText>{comics.pageCount || 0}</DetailsText>
                  </DetailsItem>
                  <DetailsItem>
                    <DetailsTitle>Price</DetailsTitle>
                    <DetailsText>
                      {comics.prices[0]?.price || "$0.00"}
                    </DetailsText>
                  </DetailsItem>
                </DetailsList>
              </DescriptionWrapper>
            </>
          )}
        </ModalWrapper>
      )}
    </Modal>
  );
};
