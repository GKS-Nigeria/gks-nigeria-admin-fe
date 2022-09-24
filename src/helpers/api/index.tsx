/* eslint-disable @typescript-eslint/no-explicit-any */
import _axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE_URL } from "../../constants/index";
import { IApiErrorResponse, IApiResponse } from "./types";
import { wrapPromiseWithLoader } from "./../toast";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    custom?: {
      skipToast: boolean;
    };
    // config?: any
  }
   
const axios = _axios.create({
    baseURL: `${API_BASE_URL}/`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const handleApiSuccess = (res: AxiosResponse) => {
    return res.data;
  };
  const handleApiError = (err: AxiosError) => {
  let errorMessagge;

  // request was manually cancelled in a `useEffect` hook
  if (_axios.isCancel(err)) {
    return; // fail silently
  }

  if (err.response?.statusText === "Unauthorized") {
    console.log(err)
  }

  if (err.response) {
    const apiError: IApiErrorResponse = err.response.data as IApiErrorResponse;
    // client received an error response (5xx, 4xx)
    errorMessagge = apiError.message;
  } else {
    // client never received a response, or request never left
    errorMessagge = null;
  }

  throw (
    errorMessagge ||
    "We couldn't complete your request. Please try again or check your internet connection."
  );
};

export const Api = {
    getCancelTokenSource: () => _axios.CancelToken.source(),
    get: (endpoint: string, config?: AxiosRequestConfig): Promise<IApiResponse> =>
      axios
        .get(endpoint, { ...config })
        .then(handleApiSuccess)
        .catch(handleApiError),
    post: (
      endpoint: string,
      data: any,
      config?: CustomAxiosRequestConfig
    ): Promise<IApiResponse> =>
    wrapPromiseWithLoader(
      axios
        .post(endpoint, data, config)
        .then(handleApiSuccess)
        .catch(handleApiError),
      { ...(config ? config.custom : {}) }
    ),
    put: (
      endpoint: string,
      data: any,
      config?: CustomAxiosRequestConfig
    ): Promise<IApiResponse> =>
        axios
          .put(endpoint, data, config)
          .then(handleApiSuccess)
          .catch(handleApiError),

    patch: (
      endpoint: string,
      data: any,
      config?: CustomAxiosRequestConfig
    ): Promise<IApiResponse> =>
        axios
          .patch(endpoint, data, config)
          .then(handleApiSuccess)
          .catch(handleApiError),

    delete: (
      endpoint: string,
      config?: CustomAxiosRequestConfig
    ): Promise<IApiResponse> =>
        axios
          .delete(endpoint, config)
          .then(handleApiSuccess)
          .catch(handleApiError),

  };
  