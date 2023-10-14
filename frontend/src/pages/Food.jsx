import React, { useEffect, useState } from "react";
import axiosInstance from "../config/AxiosInstance";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useNavigate } from "react-router-dom";
import { CONSTANT } from "../utils/constant";

export default function Food() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const navigate = useNavigate();
  async function getFood() {
    setLoading(true);
    try {
      const res = await axiosInstance.get("food");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    getFood();
  }, [fetched]);

  return (
    <>
      <p>Tambahkan menu makanan yang ada di resto</p>
      <div className="mt-2 bg-white p-4 shadow-md">
        <button
          onClick={() => navigate("food")}
          className="bg-primary text-white py-2 px-5 font-medium my-2"
        >
          + Tambah Menu
        </button>
        <table class="table-auto min-w-full ">
          <thead>
            <tr className="text-center border  bg-[#f8f8f8] ">
              <th className="py-3 border-r  ">#</th>
              <th className="py-3 border-r px-1">Nama</th>
              <th className="py-3 border-r px-1 ">Foto</th>
              <th className="py-3 border-r px-1">Harga</th>
              <th className="py-3 border-r px-1 ">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? [1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
                  <tr key={m} className="h-12 w-full border my-1">
                    <td
                      className="   bg-zinc-300  animate-puls"
                      colSpan={5}
                    ></td>
                  </tr>
                ))
              : data?.map((data, index) => (
                  <tr key={data.id} className=" text-center border">
                    <td className="text-center py-2">{++index}</td>
                    <td>{data.name}</td>
                    <td className="flex justify-center">
                      <img
                        className="h-20"
                        src={`${CONSTANT.URL}/images/${data.image}`}
                        alt=""
                      />
                    </td>
                    <td>
                      <FormatRupiah value={data.price} />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          axiosInstance.delete(`food/${data.id}`);
                          setFetched(!fetched);
                        }}
                        className="bg-primary py-2 rounded-lg w-full text-white font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
