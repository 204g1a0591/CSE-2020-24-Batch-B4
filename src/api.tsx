import axios from "axios";
export const api_url = "http://localhost:3000/api/";

export const api = axios.create({
  baseURL: api_url,
});

// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       sessionStorage.removeItem("token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );
