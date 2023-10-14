import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import axiosInstance from "../../config/AxiosInstance";
import { CONSTANT } from "../../utils/constant";

export default function ModalBills({ data, fetched, setFetched }) {
  const [show, setShow] = useState(false);
  const [kembalian, setKembalian] = useState(false);
  const [uang, setUang] = useState(0);
  const count = data
    ?.map((m) => {
      return m?.food?.price * m?.quantity;
    })
    ?.reduce((prev, curr) => prev + curr, 0);

  const handleSubmit = () => {
    axiosInstance.delete("cart").then((res) => {
      setShow(false);
      setKembalian(false);
      setFetched(!fetched);
    });
  };
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="w-full py-2 px-7 rounded-md text-white font-semibold bg-primary text-center"
      >
        Charge <FormatRupiah value={count} />
      </button>
      {show && (
        <div className="fixed left-0 top-0 flex justify-center items-center h-screen w-screen bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-[80%] p-5 h-fit">
            <h2 className="text-lg font-medium">Detail Pesanan</h2>
            <div className="flex items-start gap-2">
              <table class="table-auto w-[70%] ">
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
                </tbody>
              </table>

              <div className="w-[30%] flex flex-col items-center gap-2">
                <h2 className="text-xl font-semibold">Uang Pembeli</h2>
                <input
                  type="text"
                  onChange={(e) => setUang(Number(e.target.value))}
                  className="outline-none px-2 h-9 w-full border rounded-sm"
                  name=""
                  id=""
                />
                <div className="flex w-full gap-2">
                  <button
                    onClick={() => {
                      setShow(false);
                      setKembalian(false);
                    }}
                    className="border-2 py-2 rounded-sm  font-semibold w-full text-primary border-primary "
                  >
                    Close
                  </button>
                  <button
                    onClick={() => setKembalian(true)}
                    className=" py-2 rounded-sm  font-semibold w-full text-white bg-primary "
                  >
                    Pay!
                  </button>
                </div>

                {!kembalian && uang < count ? (
                  <p className="text-left w-full font-semibold">
                    Uang pembeli tidak cukup
                  </p>
                ) : (
                  <p className="text-left w-full font-semibold">
                    Kembalian : <FormatRupiah value={uang - count} />
                  </p>
                )}
                {kembalian && (
                  <button
                    onClick={handleSubmit}
                    className="w-full py-2 bg-primary text-white font-semibold"
                  >
                    Ok
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
