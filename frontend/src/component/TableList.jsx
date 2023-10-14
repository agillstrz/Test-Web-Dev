import React from "react";
import { CONSTANT } from "../utils/constant";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function TableList({ data, componentRef }) {
  const count = data
    ?.map((m) => {
      return m?.food?.price * m?.quantity;
    })
    ?.reduce((prev, curr) => prev + curr, 0);
  return (
    <div ref={componentRef} className="mx-10 ">
      <h1 className="text-center">Daftar Tagihan</h1>
      <table class="table-auto w-full ">
        <thead>
          <tr className="text-left border bg-[#f8f8f8] ">
            <th className="py-3 border-r  text-center">#</th>
            <th className="py-3 border-r px-1">Nama</th>
            <th className="py-3 border-r px-1">Foto</th>
            <th className="py-3 border-r px-1">Harga</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((m, index) => (
            <tr key={m.id} className=" border">
              <td className="text-center py-2">{++index}</td>
              <td>{m.food.name}</td>
              <td>
                <img
                  className="h-12"
                  src={`${CONSTANT.URL}/images/${m.food.image}`}
                  alt=""
                />
              </td>
              <td>
                <FormatRupiah value={m.food.price} />
              </td>
            </tr>
          ))}
          <tr className="border">
            <td className="text-left py-2" colSpan={3}>
              Total
            </td>
            <td className="text-left py-2">
              <FormatRupiah value={count} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
