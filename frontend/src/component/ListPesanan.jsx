import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { CONSTANT } from "../utils/constant";

export default function ListPesanan({ data, componentRef }) {
  return (
    <div
      ref={componentRef}
      className="flex border p-1 justify-between items-center w-full"
    >
      <div className="flex items-center gap-2">
        <img
          className="w-20 object-cover h-20"
          src={`${CONSTANT.URL}/images/${data?.food?.image}`}
          alt=""
        />
        <h2>{data.food?.name}</h2>
      </div>
      <div className="flex font-medium text-md items-center gap-2">
        <p>x{data.quantity}</p>
        <h2>
          <FormatRupiah value={data.food?.price} />
        </h2>
      </div>
    </div>
  );
}
