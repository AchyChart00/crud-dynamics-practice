import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";


export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
