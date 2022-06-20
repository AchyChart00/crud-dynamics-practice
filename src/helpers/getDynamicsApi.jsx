import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers.common = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL29yZ2UyYjU1ZmFkLmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTEzYWI1ZDctZmUwMy00NjI2LTg5ZGYtOGZlNmVjNTg4NGMxLyIsImlhdCI6MTY1NTc1MDE4NiwibmJmIjoxNjU1NzUwMTg2LCJleHAiOjE2NTU3NTQ1NDAsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFadDBCcmNPYk9oQ2xDTWl0QTlQM3Vwd0c0NmtvRWVtdGN6ajZDK3BEZ3FVPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MWY4MTQ4OS0xMmVlLTRhOWUtYWFhZS1hMjU5MWY0NTk4N2QiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlPDoW5jaGV6IiwiZ2l2ZW5fbmFtZSI6IkphY29iIiwiaXBhZGRyIjoiMjAxLjE0NS4xNjcuNDQiLCJuYW1lIjoiSmFjb2IgIFPDoW5jaGV6Iiwib2lkIjoiNzgwNTM2ODctMWVlYS00ZGU4LTgzMDYtNTIxNDE3ZGM4MTk1IiwicHVpZCI6IjEwMDMyMDAyMDM5MUM3MzgiLCJyaCI6IjAuQVgwQTE3VTZrUVAtSmthSjM0X203RmlFd1FjQUFBQUFBQUFBd0FBQUFBQUFBQUNhQUVzLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZZZkYzUFQ0c1ZIQnN4d0RtelNYTnJ6YjJ2ZW1fVXdfdklsZUhPX3hpRnciLCJ0aWQiOiI5MTNhYjVkNy1mZTAzLTQ2MjYtODlkZi04ZmU2ZWM1ODg0YzEiLCJ1bmlxdWVfbmFtZSI6IkphY29iU2FuY2hlekBhY2FkZW1pYWQzNjUub25taWNyb3NvZnQuY29tIiwidXBuIjoiSmFjb2JTYW5jaGV6QGFjYWRlbWlhZDM2NS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJhVloteEdjdzEwV3dHOXhaS1AwREFBIiwidmVyIjoiMS4wIn0.P60uxp12BoKjCLAvG39OOI0DFvhVyT5OThxri1RBJyRgEG-lgkJzOFS91e0Yq6T3pOTwsA5V_xKbdbU2ULH-YYoDg3mLAz8mr9VLpO6ozhsFe4n8aSD_2WeW_Srhmn-bBS_X245lUvnJSwlV476NHnqoQDsH9Tru2uNvHlS9L3uWXq1jrD9QBqj4S5Yf-UULu1RDhfFUUzx-TNkccKEcVKjylAni04vDaBgX_X1UIVr5O7dNhkD_VavU1DViNMkymFo9l95Bgq7fXUKXtxVf0o25D-cya-G0mvG7afYjNJVwmjcqT8C-5z0Ls8C2FyzeY7oYKwzK9P_9jgkiRtpcPQ",
}; 

export const getDynamicsApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts")
      .then((res) => {
        console.log(res);
        setData(res.data.value);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);

  return [data, isLoading];
};

export const postDynamicsApi = async ({
  nw_Nombre,
  nw_Direccion,
  nw_Precio,
}) => {
  console.log("inicio api");

  try {
    const res = await axios.post(
      "https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts",
      {
        nw_Nombre,
        nw_Direccion,
        nw_Precio,
      }
    );

    return res;
  } catch (error) {
    console.error("Error: " + error);
  }
};
