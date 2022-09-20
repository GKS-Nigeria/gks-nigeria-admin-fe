/* eslint-disable @typescript-eslint/no-explicit-any */
// import { USER_CODE_KEY } from "../../constants/index";
import { Api } from "../../helpers/api";
import {
    ICreateBranchOptions,
    IBranchApiResponse,
    IBranchesApiResponse,
  
} from "./types";

export const createBranch = async (data: ICreateBranchOptions) => {
  const res: IBranchApiResponse = await Api.post("admin/create-branch", data);
  return res;
};

export const getAllBranch = async (params?: any) => {
  const res: IBranchesApiResponse = await Api.get("user/branches", { params });
  return res;
};
