/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast, ToastPosition } from "react-toastify";

export const showToast = (
  message: string,
  type: "success" | "error",
  position: ToastPosition = "top-right"
) => {
  return toast[type](message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const wrapPromiseWithLoader = <T extends Record<string, any>>(
  promiseFn: Promise<T>,
  config: { skipToast?: boolean } = { skipToast: false }
): Promise<T> => {
  return config.skipToast
    ? promiseFn
    : toast.promise(promiseFn, {
        pending: "Hold on",
        success: {
          render({ data }: any) {
            return data?.message || "Operation successful";
          },
        },
        error: {
          render({ data }: any) {
            return typeof data === "string"
              ? data
              : data?.message || "Operation failed";
          },
        },
      });
};
