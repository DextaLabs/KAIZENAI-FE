import defaultAxios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axios = defaultAxios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_BASE_URL,
});

export const setAuthorizationHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axios;

// api.js

export const axiosInstance = defaultAxios.create({
  baseURL: "https://api.kaizenai.tech/api/",
});

axiosInstance.interceptors.request.use(interceptRequest);
axiosInstance.interceptors.response.use(interceptResponse, handleError);

async function interceptRequest(config: InternalAxiosRequestConfig<unknown>) {
  const access_token = sessionStorage.getItem("access");

  if (config.headers && access_token) {
    config.headers.Authorization = "Bearer " + access_token;
  }
  console.log(config.url);
  return config;
}

async function interceptResponse(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any>
): Promise<AxiosResponse<any, any>> {
  return response;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleError(error: any): Promise<never> {
  // const navigation = useNavigation();
  const refresh = sessionStorage.getItem("refresh");

  const config = error.config;
  console.log(error?.response.data, "errror response");

  if (error?.response?.status === 403 && !error.config?.__retry) {
    console.log("Unauthorized for this request:", error.config.url);

    try {
      const res = await axiosInstance.post("user/jwt/refresh/", { refresh });
      const authToken = res.data.access;

      sessionStorage.setItem("access", authToken);
      console.log("Refreshing access token", authToken);

      console.log("Refreshing access token - success:", authToken);
      // Now tell the request to try again
      error.config.__retry = true;
      if (config.headers) {
        config.headers.Authorization = "Bearer " + authToken;
      }
      return axiosInstance(config);
    } catch (err) {
      // This means the refresh token is now invalid (was used once previously).
      console.error(err);
      // await forceSignIn();
    } finally {
      // axiosStore.setState({ isRefreshingToken: false });
    }
  }
  // showErrorToast("Error", error);
  console.log("Request error:", error);
  return Promise.reject(error);
}
