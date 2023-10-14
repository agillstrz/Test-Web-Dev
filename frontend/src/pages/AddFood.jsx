import React, { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/AxiosInstance";
export default function AddFood() {
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let images = image.current.files[0];
    axiosInstance
      .post("food", {
        name: name.current.value,
        price: price.current.value,
        image: images,
      })
      .then((res) => navigate("/"))
      .catch((err) => console.log(err.response.data.message));
  };
  return (
    <div className="w-full bg-white p-5 ">
      <h2 className="text-primary text-xl mb-5">Tambah Menu</h2>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5">
        <div>
          <label htmlFor="">Nama Menu</label>
          <input
            ref={name}
            type="text"
            name="name"
            className="outline-none h-10 w-full rounded-sm px-2 border"
          />
        </div>
        <div>
          <label htmlFor="">Foto Menu</label>
          <div className="relative cursor-pointer flex justify-center items-center w-full h-40 bg-[#F8F8F8]">
            <div className="flex flex-col text-zinc-500 items-center">
              <span className="text-[40px]">
                <AiOutlineCloudUpload />
              </span>
              <p>drag and drop file here or click</p>
            </div>
            <input
              type="file"
              name="name"
              ref={image}
              className="absolute cursor-pointer opacity-0 left-0 top-0 right-0 bottom-0 w-full h-full"
            />
          </div>
        </div>
        <div>
          <label htmlFor="">Harga Menu</label>
          <div className="flex  border rounded-sm h-10">
            <div className="bg-primary  px-2 text-white flex items-center">
              RP.
            </div>
            <input
              type="text"
              ref={price}
              name="name"
              className="outline-none px-1 h-full w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-24 py-2 bg-secondary text-white font-medium transition-all duration-150 ease-in-linear hover:bg-secondary/90 active:scale-95"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
