import React, { useState } from "react";

import { Form, Button, Modal } from "react-bootstrap";

import { postDynamicsApi } from "../../helpers/getDynamicsApi";
import { Modals, ModalsNegative } from "../../helpers/Modals";

import { useForm } from "../../hooks/useForm";

export const AddData = () => {
  const [values, handleInputChange, reset] = useForm({
    nw_nombre: " ",
    nw_direccion: " ",
    nw_precio: null,
  });

  const { nw_nombre, nw_direccion, nw_precio } = values;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [showNegative, setShowNegative] = useState(false);

  const handleCloseNegative = () => setShowNegative(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const res = await postDynamicsApi(values);
    console.log(res);

    if (res) {
      console.log("dentro del IF");
      setShow(true);
      reset();
    } else {
      console.log("algo salio mal, contacte al administrador");
      setShowNegative(true);
    }
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nw_nombre"
              value={nw_nombre}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="nw_direccion"
              value={nw_direccion}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="nw_precio"
              value={nw_precio}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Añadir
          </Button>
        </Form>

        {show ? <Modals show={show} handleClose={handleClose} /> : ""}

        {showNegative ? (
          <ModalsNegative
            showNegative={showNegative}
            handleCloseNegative={handleCloseNegative}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
