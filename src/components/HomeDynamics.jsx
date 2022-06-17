import React from "react";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getDynamicsApi } from "../helpers/getDynamicsApi";
import { LandingPlaceHolder } from "../helpers/LandingPlaceHolder";

export const HomeDynamics = () => {
  const [data, isLoading] = getDynamicsApi();

  return (
    <>
      <div>Datos</div>

      {isLoading ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos) => (
              <tr key={datos.nw_giftid}>
                <td>{datos.nw_nombre}</td>
                <td>{datos.nw_direccion}</td>
                <td>{datos.nw_precio}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <LandingPlaceHolder />
      )}
    </>
  );
};
