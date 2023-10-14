import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Food from "../pages/Food";
import Transaksi from "../pages/Transaksi";
import AddFood from "../pages/AddFood";

export default function SetUpRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Food />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="food" element={<AddFood />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
