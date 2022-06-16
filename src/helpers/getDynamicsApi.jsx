import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.headers.common = {
  Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL29yZ2UyYjU1ZmFkLmFwaS5jcm0uZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTEzYWI1ZDctZmUwMy00NjI2LTg5ZGYtOGZlNmVjNTg4NGMxLyIsImlhdCI6MTY1NTM5NDA5NSwibmJmIjoxNjU1Mzk0MDk1LCJleHAiOjE2NTUzOTgzNzcsImFjciI6IjEiLCJhaW8iOiJFMlpnWUdDUldoNisxN1Q2YVl3bTJ4KzdwRjRUWVF2ZHJSM2RSVC9FcEg4ZmVLT1FyZzRBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjUxZjgxNDg5LTEyZWUtNGE5ZS1hYWFlLWEyNTkxZjQ1OTg3ZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU8OhbmNoZXoiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJpcGFkZHIiOiIyMDEuMTQ1LjE2Ny40NCIsIm5hbWUiOiJKYWNvYiAgU8OhbmNoZXoiLCJvaWQiOiI3ODA1MzY4Ny0xZWVhLTRkZTgtODMwNi01MjE0MTdkYzgxOTUiLCJwdWlkIjoiMTAwMzIwMDIwMzkxQzczOCIsInJoIjoiMC5BWDBBMTdVNmtRUC1Ka2FKMzRfbTdGaUV3UWNBQUFBQUFBQUF3QUFBQUFBQUFBQ2FBRXMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiRllmRjNQVDRzVkhCc3h3RG16U1hOcnpiMnZlbV9Vd192SWxlSE9feGlGdyIsInRpZCI6IjkxM2FiNWQ3LWZlMDMtNDYyNi04OWRmLThmZTZlYzU4ODRjMSIsInVuaXF1ZV9uYW1lIjoiSmFjb2JTYW5jaGV6QGFjYWRlbWlhZDM2NS5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJKYWNvYlNhbmNoZXpAYWNhZGVtaWFkMzY1Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IjFlalF4bGlKSmstQ0dCY1A4TlV2QUEiLCJ2ZXIiOiIxLjAifQ.XcgIeE1WB7VcIUgsFoomCecUN4q40VC4AgPGP-s-MMUsyjUrEI7RQIAoGA3feB6FPNM71IJyrsTRbvPAxDT_RNaYPVkezGoHllTXveomCL6Ptr7i5B-Fvzfa1jzG0XLkc8Cw-QaZMUm5uAA9mr2aUmg6-O4y-qfDi17jerGvV_Wn6hvtrLHBplRYH1GyXKTv23k10-_dH3UKTF2WMS8XaAaLceZABjkf4YhjQFMQGIZz2TGkiRUfpFHPvwljFI0oePkU3WoT-vJBNIlxPSmz7VeCfkgUu7S_fY65n_Gsf7YvC0vJrIDXEOAH3j1__TjD9QrdUBwJg7qjIrW5VYWp5g",
};

export const getDynamicsApi = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false); 
  useEffect(() => {
    axios
      .get("https://orge2b55fad.api.crm.dynamics.com/api/data/v9.2/nw_gifts")
      .then((res) => {
        setData(res.data.value);
        setLoading(true);
      })
      .catch((error) => console.error(error));
  }, []);

  return [data, isLoading];
};
