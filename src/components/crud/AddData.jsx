import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { isEmpty } from "validator";

import { useForm } from "../../hooks/useForm";

import { postDynamicsApi } from "../../helpers/getDynamicsApi";
import { Modals, ModalsNegative, ModalsEmpty } from "../../helpers/Modals";

export const AddData = () => {
  //Hooks para manejar el formulario
  const [values, handleInputChange, reset] = useForm({
    nw_nombre: "",
    nw_direccion: "",
    nw_precio: 0,
  });

  //Valores que se instroducen en el hook personalizado
  const { nw_nombre, nw_direccion, nw_precio } = values;

  //useState para el control de la vista del modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [showNegative, setShowNegative] = useState(false);

  const handleCloseNegative = () => setShowNegative(false);

  const [showEmpty, setShowEmp] = useState(false);

  const handleCloseEmpty = () => setShowEmp(false);

  //Arrow Functions para el control de eventos.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    //Se valida que no este vacio el campo y que no contenga espacios
    if (!isEmpty(values.nw_nombre, { ignore_whitespace: true })) {
      //Hacemos envio de los valores al Axios.post
      const res = await postDynamicsApi(values);
      console.log(res);
      //Comprobamos que regrese un status positivo.
      if (res) {
        console.log("dentro del IF");
        //Configuramos el show en true para mostrar el modal
        setShow(true);
        reset();
      } else {
        console.log("algo salio mal, contacte al administrador");
        setShowNegative(true);
      }
    } else {
      console.log("SHowEmpty front", showEmpty);
      setShowEmp(true);
      console.log("SHowEmpty front 2", showEmpty);
    }
  };
  console.log(values);
  return (
    <>
      <div className="container">
        {/* Formulario */}
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
            <Form.Label>Direcci??n</Form.Label>
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
            A??adir
          </Button>
        </Form>

        {/* Se llama a los componentes de los modals y se realiza una comprobaci??n para mostrarlos */}
        {show ? <Modals show={show} handleClose={handleClose} /> : ""}

        {showNegative ? (
          <ModalsNegative
            showNegative={showNegative}
            handleCloseNegative={handleCloseNegative}
          />
        ) : (
          ""
        )}

        {showEmpty ? (
          <ModalsEmpty
            showEmpty={showEmpty}
            handleCloseEmpty={handleCloseEmpty}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
