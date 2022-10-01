/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, IApiResponse } from "../../helpers/api/types";


export enum USER_ROLES {
  MEMBER = "member",
  ADMIN = "admin",
  JUNIOR_ADMIN = "junior_admin",
}

export enum USER_ENTITY {
  USER = "user",
}


export interface IUserTokenApiResponse extends IApiResponse {
  data: "Token sent";
}

export interface IUserLoginResponse {
  statusCode?: number;
  message?: string;
  success: boolean;
  data: any;
  jwt: string;
  access_code?: string;
}

export interface ICreateJuniorAdminOptions {
  [key: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string

}

export interface IJuniorAdmin extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  branch: string
  results: string
  adminId: string
  isActive: boolean;
}

export interface IMember extends Document {
  email: string;
  firstName: string;
  lastName: string;
  branch: string;
  results: string;
  address: string;
  phone: string;
}

export interface IMemberApiResponse extends IApiResponse {
  data: IMember;
}
export interface IMembersApiResponse extends IApiResponse {
  data: IMember[] | any;
}

export interface IJuniorAdminApiResponse extends IApiResponse {
  data: IJuniorAdmin;
}

export interface IJuniorAdminsApiResponse extends IApiResponse {
  data: IJuniorAdmin[] | any;
}

export interface ILoginUserOptions {
  email: string;
  code: string;
}
