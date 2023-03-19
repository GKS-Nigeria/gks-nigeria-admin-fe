import { Document, IApiResponse } from "../../helpers/api/types";

export interface IPostContentOptions {
    [key: string]: string;
    title: string;
    body: string;
    branchId: string;
  
  }
export interface IPostNotificationOptions {
    body: string;
    icon: string;
  
  }

  export interface IPostCalenderActivityOptions {
    [key: string]: string;
    title: string;
    body: string;
    branchId: string;
    group: string;
    date: string;
    startTime: string;
    endTime: string;
  
  }
  
  export interface IPostDailyDevotionOptions {
    [key: string]: string;
    title: string;
    body: string;
    branchId: string;
    group: string;
    date: string;
  
  }

  export interface IPost extends Document {
    title: string;
    body: string;
    icon: string;
    branchId: string;
    group: string;
    date: string;
    startTime: string;
    endTime: string;
  
  }

  export interface IPostContentApiResponse extends IApiResponse {
    data: IPost;
    message: string;
  }