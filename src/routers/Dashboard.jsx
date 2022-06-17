import React from "react";

import { Routes, Route } from "react-router-dom";

import { Navigationbar } from "../components/Navigationbar";
import { HomeDynamics } from "../components/HomeDynamics";
import { AddData } from "../components/crud/AddData";
import { EditData } from "../components/crud/EditData";
import { DeleteData } from "../components/crud/DeleteData";

export const Dashboard = () => {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path="home" element={<HomeDynamics />} />
        <Route path="add" element={<AddData />} />
        <Route path="edit" element={<EditData />} />
        <Route path="delete" element={<DeleteData />} />

        <Route path="*" element={<HomeDynamics />} />
      </Routes>
    </div>
  );
};
