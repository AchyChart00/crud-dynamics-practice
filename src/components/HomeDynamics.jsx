import React, { useState } from "react";

import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever, MdModeEditOutline } from "react-icons/md";
import { FcRefresh } from "react-icons/fc";
import "dotenv/config";

import { getDynamicsApi, deleteDynamicsApi } from "../helpers/getDynamicsApi";
import { LandingPlaceHolder } from "../helpers/LandingPlaceHolder";
import { ConfirmationModals } from "../helpers/Modals";

export const HomeDynamics = () => {
  console.log(process.env);

  //Obtención de datos, si data es null se muestra el placeholder
  const [data, isLoading] = getDynamicsApi();
  console.log(data);

  //useState para el control del modal
  const [showConf, setShowConf] = useState(false);
  //useSate para el manejo del id al momento de presionar el boton de eliminar
  const [id, setId] = useState({});

  //Arrow Function para el control del modal
  const handleCloseConf = () => setShowConf(false);
  //Arrow function para el manejo del id del dato a eliminar
  const handleCloseConfDelete = (id) => {
    console.log(id);
    deleteDynamicsApi(id);
    setShowConf(false);
  };

  //AF para el control del boton eliminar
  const deleteHandle = (nw_giftid) => {
    setShowConf(true);
    setId(nw_giftid);
    console.log(showConf);

    /* console.log(nw_giftid);
    deleteDynamicsApi(nw_giftid); */
  };

  return (
    <>
      <div className="container">
        <div className="btn btn-info " onClick={() => window.location.reload()}>
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
                  <td>
                    <div className="btn btn-warning">
                      <Link to="/edit" state={datos} className="">
                        <MdModeEditOutline />
                        Editar
                      </Link>
                    </div>
                  </td>
                  <td>
                    <div
                      className="btn btn-danger"
                      onClick={() => deleteHandle(datos.nw_giftid)}
                    >
                      <MdOutlineDeleteForever />
                      Eliminar
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <LandingPlaceHolder />
        )}

        {showConf ? (
          <ConfirmationModals
            showConf={showConf}
            handleCloseConf={handleCloseConf}
            handleCloseConfDelete={handleCloseConfDelete}
            id={id}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
