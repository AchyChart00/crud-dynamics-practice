import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigationbar } from "../components/Navigationbar";
import { HomeDynamics } from "../components/HomeDynamics";

export const Dashboard = () => {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path="home" element={<HomeDynamics />} />
      </Routes>
    </div>
  );
};
