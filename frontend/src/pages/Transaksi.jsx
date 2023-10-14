import React, { useEffect, useState } from "react";
import Pesanan from "../component/layouts/Pesanan";
import axiosInstance from "../config/AxiosInstance";
import CardFood from "../component/CardFood";

export default function Transaksi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
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
  }, []);

  return (
    <div className="flex lg:flex-row items-start flex-col gap-4 ">
      <div className="lg:w-[65%] grid grid-cols-2 md:grid-cols-3 gap-5 gap-y-4 place-items-center">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((m) => (
              <div
                key={m}
                className="h-64 w-full bg-zinc-300 rounded-md animate-pulse"
              ></div>
            ))
          : data?.map((food) => (
              <CardFood
                fetched={fetched}
                setFetched={setFetched}
                key={food.id}
                food={food}
              />
            ))}
      </div>
      <div className="lg:w-[35%]">
        <Pesanan setFetched={setFetched} fetched={fetched} />
      </div>
    </div>
  );
}
