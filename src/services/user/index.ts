/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_CODE_KEY } from "../../constants/index";
import { Api } from "../../helpers/api";
import {
  ICreateJuniorAdminOptions,
  // IJuniorAdmin,
  IJuniorAdminApiResponse,
  IJuniorAdminsApiResponse,
  ILoginUserOptions,
  // IUserApiResponse,
  IMembersApiResponse,
  IUserLoginResponse,
  IUserTokenApiResponse,
  
} from "./types";


export const loadAuthToken = () => {
  if (typeof window !== "undefined")
    return localStorage.getItem(USER_CODE_KEY);
  return null;
};

export const saveAuthToken = (code: string) =>
  localStorage.setItem(USER_CODE_KEY, code);

export const removeAuthToken = () => localStorage.removeItem("token");

export const requestToken = async (
  email: string,
  
) => {
  const res: IUserTokenApiResponse = await Api.post(
    "auth/request",
    { email}
  );
  return res;
};

export const logoutUser = () => {
  removeAuthToken();
};

export const loginUser = async (data: ILoginUserOptions) => {
  const res = (await Api.post(
    "auth/verify",
    data
  )) as IUserLoginResponse;
  res.access_code && saveAuthToken(res.access_code);
  return res;
};


export const createJuniorAdmin = async (data: ICreateJuniorAdminOptions) => {
  const res: IJuniorAdminApiResponse = await Api.post("admin/create-junior-admin", data);
  return res;
};

export const getAllJuniorAdmins = async (params?: any) => {
  const res: IJuniorAdminsApiResponse = await Api.get("admin/junior-admins", { params });
  return res;
};

export const getAllMembers = async (params?: any) => {
  const res: IMembersApiResponse = await Api.get("admin/get-users", { params });
  return res;
};

export const getSingleMember = async (id: any["_id"]) => {
  const res: IMembersApiResponse = await Api.get(`admin/user/${id}`);
  return res;
};


export const deleteSingleMember = async (id: any["_id"]) => {
  const res = await Api.delete(`admin/user/${id}`);
  return res;
};



// export const updateSingleUser = async (
//   id: IUser["_id"],
//   data: Partial<Pick<IUser, "roles">>
// ) => {
//   const res: IUserApiResponse = await Api.patch(`/junior_admin/${id}`, data);
//   return res;
// };


