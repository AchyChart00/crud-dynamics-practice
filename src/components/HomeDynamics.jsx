import React, { useState, useEffect } from "react";

import { Placeholder, Table } from "react-bootstrap";

import axios from "axios";

export const HomeDynamics = () => {
  axios.defaults.headers.common = {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL29yZ2UyYjU1ZmFkLmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTEzYWI1ZDctZmUwMy00NjI2LTg5ZGYtOGZlNmVjNTg4NGMxLyIsImlhdCI6MTY1NTM4OTA2MiwibmJmIjoxNjU1Mzg5MDYyLCJleHAiOjE2NTUzOTMxNTUsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFWcFc5Yk0rRytMQnQ1dmR4Uk5tRGZKdk1VUmIrcE5zT3hhZkwrdVJNNDc4PSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MWY4MTQ4OS0xMmVlLTRhOWUtYWFhZS1hMjU5MWY0NTk4N2QiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlPDoW5jaGV6IiwiZ2l2ZW5fbmFtZSI6IkphY29iIiwiaXBhZGRyIjoiMjAxLjE0NS4xNjcuNDQiLCJuYW1lIjoiSmFjb2IgIFPDoW5jaGV6Iiwib2lkIjoiNzgwNTM2ODctMWVlYS00ZGU4LTgzMDYtNTIxNDE3ZGM4MTk1IiwicHVpZCI6IjEwMDMyMDAyMDM5MUM3MzgiLCJyaCI6IjAuQVgwQTE3VTZrUVAtSmthSjM0X203RmlFd1FjQUFBQUFBQUFBd0FBQUFBQUFBQUNhQUVzLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZZZkYzUFQ0c1ZIQnN4d0RtelNYTnJ6YjJ2ZW1fVXdfdklsZUhPX3hpRnciLCJ0aWQiOiI5MTNhYjVkNy1mZTAzLTQ2MjYtODlkZi04ZmU2ZWM1ODg0YzEiLCJ1bmlxdWVfbmFtZSI6IkphY29iU2FuY2hlekBhY2FkZW1pYWQzNjUub25taWNyb3NvZnQuY29tIiwidXBuIjoiSmFjb2JTYW5jaGV6QGFjYWRlbWlhZDM2NS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJIV1k5em1sMllrT3dPejJyMEFrbkFBIiwidmVyIjoiMS4wIn0.gDQ5WKnthaJT_pOd7RyHSF-UcHbUfkxJMNhgV4ZeLuUM1HjVrDZdF_9r-hDDz5yORLPxsvxzVUFVXnAxXGkC7-XZgPbI6kK-oCSRkURFrixJIYD1Axrngx-PDPk0vTI8zUxgI9Eo17Mbe9RMuGhbEJvCBP8xXhuNSJeTItTQlBh75NFKbEV7qoLLhpxiktdy4VTcTs6Glw8FKD5Vf5r4JafzkSrGrGipxHDKfta3D1hp0lFReQbUtguf-OZb-As_whuMlBroF8qiIqQJSLc9A-dwRlx4LZywkBrY7c8fjvSZC3bSNvnFEw6bLWXWEbb7MXVSr0XkGM17n0Akop8qOw",
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts")
      .then((res) => {
        setUserData(res.data.value);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(userData);

  return (
    <>
      <div>Datos</div>

      {userData ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Dirección</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((datos) => {
              return (
                <tr key={datos.nw_giftid}>
                  <td>{datos.nw_nombre}</td>
                  <td>{datos.nw_direccion}</td>
                  <td>{datos.nw_precio}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
        </>
      )}
    </>
  );
};
