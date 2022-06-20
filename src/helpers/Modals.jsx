import React from "react";
import { Modal, Button } from "react-bootstrap";

import { FcCheckmark, FcHighPriority, FcExpired, FcInfo } from "react-icons/fc";

export const Modals = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FcCheckmark />
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Se Envio tu entrada correctamente</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ModalsNegative = ({ showNegative, handleCloseNegative }) => {
  console.log("modal negativo");
  console.log(showNegative, handleCloseNegative);
  return (
    <>
      <Modal show={showNegative} onHide={handleCloseNegative}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FcHighPriority /> ERROR
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>No se enviaron los datos introducidos</Modal.Body>
        <Modal.Body>Por favor, Contacte con el administrador</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNegative}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ModalsEmpty = ({ showEmpty, handleCloseEmpty }) => {
  console.log("modal empty");
  console.log(showEmpty, handleCloseEmpty);
  return (
    <>
      <Modal show={showEmpty} onHide={handleCloseEmpty}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FcHighPriority /> ERROR
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FcExpired />
          Nombre es obligatorio
        </Modal.Body>
        <Modal.Body>
          <FcInfo />
          Uno o más campos Están vacios
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEmpty}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
