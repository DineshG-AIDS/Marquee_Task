// Axios.js
import axios from "axios";

const Axios = (type, path, payload) => {
  const apiEndPoint = "https://openlibrary.org";
  const axiosInstance = axios.create({
    baseURL: apiEndPoint,
    timeout: 100000,
  });

  try {
    if (type === "get") {
      return axiosInstance.get(path, { params: payload });
    }
    if (type === "post") {
      return axiosInstance.post(path, payload);
    }
    if (type === "put") {
      return axiosInstance.put(path, payload);
    }
    if (type === "delete") {
      return axiosInstance.delete(path, { data: payload });
    }
  } catch (error) {
    throw error;
  }
};

export default Axios;
