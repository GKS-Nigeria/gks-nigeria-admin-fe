import { USER_CODE_KEY } from "../../constants/index";
import { Api } from "../../helpers/api";
import {
  ICreateUserOptions,
  ILoginUserOptions,
  IUserApiResponse,
  IUserLoginResponse,
  IUserTokenApiResponse,
  
} from "./types";

const AUTH_API_BASE = "/auth";


export const loadAuthToken = () => {
  if (typeof window !== "undefined")
    return localStorage.getItem(USER_CODE_KEY);
  return null;
};

export const saveAuthToken = (code: string) =>
  localStorage.setItem(USER_CODE_KEY, code);

export const removeAuthToken = () => localStorage.removeItem(USER_CODE_KEY);

export const requestToken = async (
  email: string,
  
) => {
  const res: IUserTokenApiResponse = await Api.post(
    `${AUTH_API_BASE}/request`,
    { email}
  );
  return res;
};

export const logoutUser = () => {
  // removeAuthToken();
  console.log("logout")

};

export const loginUser = async (data: ILoginUserOptions) => {
  const res = (await Api.post(
    `${AUTH_API_BASE}/verify`,
    data
  )) as IUserLoginResponse;
  res.access_code && saveAuthToken(res.access_code);
  return res;
};

export const createUser = async (data: ICreateUserOptions) => {
  const res: IUserApiResponse = await Api.post("admin/create-junior-admin", data);
  return res;
};

// export const getAllUsers = async (params?: any) => {
//   const res: IUsersApiResponse = await Api.get("admin/get-junior-admin", { params });
//   return res;
// };

// export const getSingleUser = async (id: IUser["_id"]) => {
//   const res: IUserApiResponse = await Api.get(`/junior-admin/${id}`);
//   return res;
// };

// export const updateSingleUser = async (
//   id: IUser["_id"],
//   data: Partial<Pick<IUser, "roles">>
// ) => {
//   const res: IUserApiResponse = await Api.patch(`/junior_admin/${id}`, data);
//   return res;
// };

// export const removeSingleUser = async (id: IUser["_id"]) => {
//   const res = await Api.delete(`/junior_admin/${id}`);
//   return res;
// };
