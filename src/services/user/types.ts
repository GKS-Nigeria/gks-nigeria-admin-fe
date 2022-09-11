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
  access_code?: string;
}

export interface ICreateUserOptions {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;

}

export interface IUser extends Document {
  email: string;
  first_name: string;
  last_name: string;
  roles: USER_ROLES[];
  branch: string;
  address: string;
  phone_number: string;
}

export interface IUserApiResponse extends IApiResponse {
  data: IUser;
}

export interface IUsersApiResponse extends IApiResponse {
  data: IUser[];
}

export interface ILoginUserOptions {
  email: string;
  code: string;
  // entity?: USER_ENTITY;
}
