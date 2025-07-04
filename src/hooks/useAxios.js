// import axios from "axios";

// const API = axios.create({
//   baseURL: `${import.meta.env.VITE_baseURL}`,
// });

// const useAxios = () => {
//   return API;
// };

// export default useAxios;

import axios from "axios";

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
  });

    return axiosInstance;
};

export default useAxios;

