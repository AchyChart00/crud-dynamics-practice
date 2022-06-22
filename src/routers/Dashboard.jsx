import React from "react";

import { Routes, Route } from "react-router-dom";

import { Navigationbar } from "../components/Navigationbar";
import { HomeDynamics } from "../components/HomeDynamics";
import { AddData } from "../components/crud/AddData";
import { EditData } from "../components/crud/EditData";

export const Dashboard = () => {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path="home" element={<HomeDynamics />} />
        <Route path="add" element={<AddData />} />
        <Route path="edit" element={<EditData />} />

        <Route path="*" element={<HomeDynamics />} />
      </Routes>
    </div>
  );
};
