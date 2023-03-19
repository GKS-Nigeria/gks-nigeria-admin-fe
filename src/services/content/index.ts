import { Api } from "../../helpers/api";
import {
    IPostContentOptions,
    IPostContentApiResponse,
    IPostNotificationOptions,
    IPostCalenderActivityOptions,
    IPostDailyDevotionOptions
  
} from "./types";



export const postFeed = async (data: IPostContentOptions) => {
  const res: IPostContentApiResponse = await Api.post("admin/post-feed", data);
  return res;
};

export const postAnnouncement= async (data: IPostContentOptions) => {
  const res: IPostContentApiResponse = await Api.post("admin/send-announcement", data);
  return res;
};

export const postNotification= async (data: IPostNotificationOptions) => {
  const res: IPostContentApiResponse = await Api.post("admin/send-notification", data);
  return res;
};
export const postCalenderActivity= async (data: IPostCalenderActivityOptions) => {
  const res: IPostContentApiResponse = await Api.post("admin/add-calendar-activity", data);
  return res;
};
export const postDailyDevotion= async (data: IPostDailyDevotionOptions) => {
  const res: IPostContentApiResponse = await Api.post("admin/add-daily-devotional-guide", data);
  return res;
};

