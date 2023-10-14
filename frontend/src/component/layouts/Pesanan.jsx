import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useReactToPrint } from "react-to-print";
import axiosInstance from "../../config/AxiosInstance";
import ListPesanan from "../ListPesanan";
import ModalBills from "../modals/ModalBills";
import { FaUserTag } from "react-icons/fa";
export default function Pesanan({ setFetched, fetched }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const componentRef = useRef();

  async function getCart() {
    setLoading(true);
    try {
      const res = await axiosInstance.get("cart");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  const deleteAll = () => {
    axiosInstance.delete("cart").then((res) => {
      toast.success("berhasil menghapus semua cart");
      setFetched(false);
    });
  };
  useEffect(() => {
    getCart();
  }, [fetched]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print succes"),
  });
  return (
    <>
      <Toaster />
      <div className="flex w-full rounded-lg bg-white items-center  p-2 shadow-md  flex-col gap-2">
        <div className="w-12 h-12 border-black rounded-full border-2">
          <FaUserTag />
        </div>
        {data.length > 0 && (
          <div className=" w-full">
            {data?.map((data) => (
              <ListPesanan componentRef={componentRef} key={data} data={data} />
            ))}
          </div>
        )}

        <button
          onClick={deleteAll}
          className="w-full border-2 border-red-500 py-2 text-center"
        >
          Clear Cart
        </button>
        <div className="flex w-full items-center gap-2">
          <button
            disabled={data.length <= 0}
            onClick={() => toast.success("Berhasil Menyimpan Cart")}
            className="w-full  bg-secondary text-white font-medium py-2 text-center"
          >
            Save Bill
          </button>
          <button
            onClick={handlePrint}
            className="w-full  bg-secondary text-white font-medium py-2 text-center"
          >
            Print Bill
          </button>
        </div>
        <ModalBills setFetched={setFetched} fetched={fetched} data={data} />
      </div>
    </>
  );
}
