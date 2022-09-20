/** @jsxImportSource @emotion/react */
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";
import { LinkText, Text } from "../../lib/Text";
// import { useTheme } from "@emotion/react";
import Feed from "../../assets/icons/feed.svg";
import Announcement from "../../assets/icons/announcement.svg";
import Notification from "../../assets/icons/notifications.svg";
import Calender from "../../assets/icons/calender.svg";
import DailyDevotion from "../../assets/icons/dailyDevotion.svg";
import "./index.css";
import { Input } from "../../lib/form/Input";
import RecentContentTable from "../../components/table/RecentContent_table";

const Content = () => {
  // const { palette } = useTheme();

  return (
    <div>
      <AdminDashboardLayout pageTitle="Content">
        <div className="p-4">
          <Text color="blue_6" className="fw-bold ">
            Choose Content
          </Text>
          <div className="d-flex justify-content-around my-4">
            <LinkText color="blue_6" href="content/feed">
              <div className="box">
                <img src={Feed} alt="" />
              </div>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Feed
              </Text>
            </LinkText>
            <LinkText color="blue_6" href="content/announcement">
              <div className="box">
                <img src={Announcement} alt="" />
              </div>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Announcement
              </Text>
            </LinkText>
            <LinkText color="blue_6" href="content/notification">
              <div className="box">
                <img src={Notification} alt="" />
              </div>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Notification
              </Text>
            </LinkText>
            <LinkText color="blue_6" href="content/calender">
              <div className="box">
                <img src={Calender} alt="" />
              </div>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Calender
              </Text>
            </LinkText>
            <LinkText color="blue_6" href="content/dailyDevotion">
              <div className="box">
                <img src={DailyDevotion} alt="" />
              </div>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Daily Devotion
              </Text>
            </LinkText>
          </div>
          <div>
            <Text color="blue_6" className="fw-bold mt-4"> Recent</Text>
            <hr/>
          </div>
          
          <div className="mx-4">
        <Input
          type="search"
          placeholder="Search..."
          css={{
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: "8px",
            // paddingLeft: 38,
            border: "1px solid #9E9E9E",
            width: "200px",
          }}
        />
        </div>
          <section className="my-2">
            <RecentContentTable />
          </section>
        </div>
      </AdminDashboardLayout>
    </div>
  );
};

export default Content;
