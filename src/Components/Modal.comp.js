import React from "react";
import { Modal } from "react-bootstrap";
import KinoSingleComp from "./KinoSingle.comp";

const ModalComponent = ({ open, onClose, data }) => {
  return (
    <Modal show={open} onHide={onClose}>
      {data && <KinoSingleComp {...data} />}
    </Modal>
  );
};

export default ModalComponent;
