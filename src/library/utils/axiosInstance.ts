import defaultAxios from "axios";

const axios = defaultAxios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const setAuthorizationHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axios;
