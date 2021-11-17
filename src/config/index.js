import axios from "axios";
import { API_BASE_URL, baseUrl } from "./baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

// getting the token
const token = AsyncStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // headers: {
  //   Authorization: token ? `Bearer ${token}` : "",
  // },
});

export default axiosInstance;
