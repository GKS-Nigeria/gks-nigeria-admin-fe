/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, IApiResponse } from "../../helpers/api/types";

export interface ICreateBranchOptions {
    [key: string]: string;
    name: string;
    address: string
  
  }
  
  export interface IBranch extends Document {
    name: string | any;
    address: string;
    members: string;
    branch: string | any;
    results: string;
    admins: string
    groups: string
    isActive: boolean;
  }

  export interface IBranchApiResponse extends IApiResponse {
    data: IBranch;
    message: string;
    results: string | any;
    branch: string | any;
  }
  
  export interface IBranchesApiResponse extends IApiResponse {
    data: IBranch[] | any;
  }