import { useEffect } from "react";
import * as API from "App/services/services";
import { Modal } from "App/components/Modal";
import {
  ModalWrapper,
  WrapperImages,
  InnerMainImg,
  MainImg,
} from "./ComicsModal.styled";

export const ComicsModal = ({ id, setActive }) => {
  useEffect(() => {
    const data = API.getComicsById(id).then(console.log);
  });
  return (
    <Modal setActive={setActive}>
      <ModalWrapper>
        <WrapperImages>
          <InnerMainImg>
            <MainImg />
          </InnerMainImg>
        </WrapperImages>
      </ModalWrapper>
    </Modal>
  );
};
