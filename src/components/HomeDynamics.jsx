import React from "react";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcRefresh } from "react-icons/fc";

import { getDynamicsApi } from "../helpers/getDynamicsApi";
import { LandingPlaceHolder } from "../helpers/LandingPlaceHolder";

export const HomeDynamics = () => {
  const [data, isLoading] = getDynamicsApi();
  console.log(data);

  return (
    <>
      <div className="btn btn-info" onClick={() => window.location.reload()}>
        <FcRefresh />
        Refresh
      </div>

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
                <td>
                  <Link to="/edit" state={datos} className="">
                    {datos.nw_nombre}
                  </Link>
                </td>

                <td>
                  <Link to="/edit" state={datos} className="">
                    {datos.nw_direccion}
                  </Link>
                </td>

                <td>
                  <Link to="/edit" state={datos} className="">
                    {datos.nw_precio}
                  </Link>
                </td>
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
