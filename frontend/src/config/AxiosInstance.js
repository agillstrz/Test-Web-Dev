import axios from "axios";
import { CONSTANT } from "../utils/constant";

const axiosInstance = axios.create({
  baseURL: CONSTANT.BASE_URL,
  headers: {
    Accept: "application/json",
    "content-type": "multipart/form-data",
  },
});

export default axiosInstance;
