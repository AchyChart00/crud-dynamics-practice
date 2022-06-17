import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { FcCheckmark, FcHighPriority } from "react-icons/fc";

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
