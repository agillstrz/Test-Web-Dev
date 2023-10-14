import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { CONSTANT } from "../utils/constant";
import axiosInstance from "../config/AxiosInstance";

export default function CardFood({ food, fetched, setFetched }) {
  const handleSubmit = () => {
    axiosInstance
      .post("cart", {
        food_id: food.id,
        quantity: 1,
      })
      .then((res) => {
        setFetched(!fetched);
      });
  };
  return (
    <div
      onClick={handleSubmit}
      className="flex rounded-md cursor-pointer hover:shadow-lg shadow-md bg-white w-full h-64 p-2 justify-between flex-col items-center"
    >
      <img
        className="h-[80%] object-cover  w-full"
        src={`${CONSTANT.URL}/images/${food.image}`}
        alt="Food"
      />
      <div className="h-[20%] py-1 font-semibold text-md">
        <h1>{food.name}</h1>
        <p className="text-primary">
          <FormatRupiah value={food.price} />
        </p>
      </div>
    </div>
  );
}
