/* eslint-disable @typescript-eslint/no-explicit-any */
import { Document, IApiResponse } from "../../helpers/api/types";

export interface IPostContentOptions {
    [key: string]: string;
    image: string;
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
  export interface IContent extends Document {
    notification: any;
    announcement: any;
    feed: any;
    title: string;
    body: string;
    branchId: string;
    group: string;
    date: string;
  
  }

  export interface IPost extends Document {
    image: string;
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

  export interface IContentApiResponse extends IApiResponse {
    data: IContent[] | any;
  }
  