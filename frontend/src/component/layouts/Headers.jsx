import React from "react";
import Navbar from "./Navbar";

export default function Headers() {
  return (
    <div className="w-full ">
      <div
        className={`flex  w-full h-12 text-white items-center lg:px-32 px-5  bg-primary`}
      >
        <button className="text-xl font-bold">Alan Creative</button>
      </div>
      <Navbar />
    </div>
  );
}
