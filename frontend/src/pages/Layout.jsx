import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../component/layouts/Headers";

export default function Layout() {
  return (
    <div>
      <Headers />
      <div className="lg:px-32 px-5 bg-[#F8F8F8] pt-5">
        <Outlet />
      </div>
    </div>
  );
}
