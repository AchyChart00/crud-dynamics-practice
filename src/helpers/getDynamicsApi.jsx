import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers.common = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL29yZ2UyYjU1ZmFkLmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTEzYWI1ZDctZmUwMy00NjI2LTg5ZGYtOGZlNmVjNTg4NGMxLyIsImlhdCI6MTY1NTQ4NzI4MiwibmJmIjoxNjU1NDg3MjgyLCJleHAiOjE2NTU0OTI1MTUsImFjciI6IjEiLCJhaW8iOiJBU1FBMi84VEFBQUFia0MwYmxDZlB0S2xQbk0ra3RqeFNNTEJSV2xyOTlQUWpJakFzelF3OURZPSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiI1MWY4MTQ4OS0xMmVlLTRhOWUtYWFhZS1hMjU5MWY0NTk4N2QiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlPDoW5jaGV6IiwiZ2l2ZW5fbmFtZSI6IkphY29iIiwiaXBhZGRyIjoiMjAxLjE0NS4xNjcuNDQiLCJuYW1lIjoiSmFjb2IgIFPDoW5jaGV6Iiwib2lkIjoiNzgwNTM2ODctMWVlYS00ZGU4LTgzMDYtNTIxNDE3ZGM4MTk1IiwicHVpZCI6IjEwMDMyMDAyMDM5MUM3MzgiLCJyaCI6IjAuQVgwQTE3VTZrUVAtSmthSjM0X203RmlFd1FjQUFBQUFBQUFBd0FBQUFBQUFBQUNhQUVzLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkZZZkYzUFQ0c1ZIQnN4d0RtelNYTnJ6YjJ2ZW1fVXdfdklsZUhPX3hpRnciLCJ0aWQiOiI5MTNhYjVkNy1mZTAzLTQ2MjYtODlkZi04ZmU2ZWM1ODg0YzEiLCJ1bmlxdWVfbmFtZSI6IkphY29iU2FuY2hlekBhY2FkZW1pYWQzNjUub25taWNyb3NvZnQuY29tIiwidXBuIjoiSmFjb2JTYW5jaGV6QGFjYWRlbWlhZDM2NS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJrTzlvc1dTZE9VbUNTaDh3ZC1aeEFBIiwidmVyIjoiMS4wIn0.bqc24S7JqmhyZi0hyJQc8uye7wjXVjt5QtKvdk7b2F8r4IXj-iOXTvS8go-2sYXS7T14ASbt9HVARe5y6nS1QnFmyhZL6BsY3lpbI11D6L0tu4-n-uBfn4Ar7_TiFqA1V-KmDXu4UGV2Z9_8DEqhLoPTGbWQh1xx0E7Bn6b6Pq9x_2ff-UwdpPZS8gqR-LmYYiMOATf_J_LTXIiksYXjZUiY3fJhTWiTL9WUGysyNvkL2E9xvL-GP-R0P2LqBnyrfeXBJlWmp1dfZvkRqVjEzCnMVLZZX_714fKq2g6EyDOGp7QoheT5OPyE_eCClLw9fd4FsXYDTPyZGtjtiUOZ7w",
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
  nw_nombre,
  nw_direccion,
  nw_precio,
}) => {
  console.log("inicio api");

  try {
    const res = await axios.post(
      "https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts",
      {
        nw_nombre,
        nw_direccion,
        nw_precio,
      }
    );

    return res;
  } catch (error) {
    console.error("Error: " + error);
  }
};
