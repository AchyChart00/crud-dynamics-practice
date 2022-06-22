import axios from "axios";
import { useEffect, useState } from "react";
import "dotenv/config";

axios.defaults.headers.common = {
  Authorization: `bearer ${process.env.REACT_APP_API_KEY}`,
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

export const patchDynamicsApi = async (
  { nw_nombre, nw_direccion, nw_precio },
  nw_giftid
) => {
  console.log(nw_giftid);
  try {
    const res = await axios.patch(
      `https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts(${nw_giftid})`,
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

export const deleteDynamicsApi = async (nw_giftid) => {
  console.log(nw_giftid);

  try {
    const res = await axios.delete(
      `https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts(${nw_giftid})`
    );

    return res;
  } catch (error) {
    console.error("Error: " + error);
  }
};
