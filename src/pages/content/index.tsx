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
// import { Input } from "../../lib/form/Input";
// import RecentContentTable from "../../components/table/RecentContent_table";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

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
            <UncontrolledDropdown>
              <DropdownToggle
                css={{
                  backgroundColor: "transparent !important",
                  padding: 0,
                  border: "0 !important",
                  boxShadow: "none !important",
                }}
              >
                <div className="box">
                  <img src={Feed} alt="" />
                </div>
              </DropdownToggle>
              <DropdownMenu
                css={{
                  minWidth: 111,
                  borderRadius: 10,
                  borderColor: "transparent",
                  boxShadow:
                    "0px 0px 0px 1px rgba(152, 161, 179, 0.1), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 5px 15px rgba(0, 0, 0, 0.08)",
                }}
              >
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText
                    href="content/recentFeed"
                    color="blue_6"
                    className="fs-14 fw-500"
                  >
                    View Recent
                  </LinkText>
                </DropdownItem>
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText
                    href="content/feed"
                    color="blue_6"
                    className="fs-14 fw-500"
                  >
                    Create Feed
                  </LinkText>
                </DropdownItem>
              </DropdownMenu>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Feed
              </Text>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                css={{
                  backgroundColor: "transparent !important",
                  padding: 0,
                  border: "0 !important",
                  boxShadow: "none !important",
                }}
              >
                <div className="box">
                  <img src={Announcement} alt="" />
                </div>
              </DropdownToggle>
              <DropdownMenu
                css={{
                  minWidth: 111,
                  borderRadius: 10,
                  borderColor: "transparent",
                  boxShadow:
                    "0px 0px 0px 1px rgba(152, 161, 179, 0.1), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 5px 15px rgba(0, 0, 0, 0.08)",
                }}
              >
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText href="/content/recentAnnouncement" color="blue_6" className="fs-14 fw-500">
                    View Recent
                  </LinkText>
                </DropdownItem>
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText
                    href="content/announcement"
                    color="blue_6"
                    className="fs-14 fw-500"
                  >
                    Create Announcement
                  </LinkText>
                </DropdownItem>
              </DropdownMenu>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Announcement
              </Text>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle
                css={{
                  backgroundColor: "transparent !important",
                  padding: 0,
                  border: "0 !important",
                  boxShadow: "none !important",
                }}
              >
                <div className="box">
                  <img src={Notification} alt="" />
                </div>
              </DropdownToggle>
              <DropdownMenu
                css={{
                  minWidth: 111,
                  borderRadius: 10,
                  borderColor: "transparent",
                  boxShadow:
                    "0px 0px 0px 1px rgba(152, 161, 179, 0.1), 0px 15px 35px -5px rgba(17, 24, 38, 0.15), 0px 5px 15px rgba(0, 0, 0, 0.08)",
                }}
              >
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText href="/content/recentNotification" color="blue_6" className="fs-14 fw-500">
                    View Recent
                  </LinkText>
                </DropdownItem>
                <DropdownItem
                  css={{ backgroundColor: "transparent !important" }}
                >
                  <LinkText
                    href="content/notification"
                    color="blue_6"
                    className="fs-14 fw-500"
                  >
                    Create Notification
                  </LinkText>
                </DropdownItem>
              </DropdownMenu>
              <Text
                color="blue_6"
                className="fw-500 p-1 d-flex justify-content-center"
              >
                Notification
              </Text>
            </UncontrolledDropdown>

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
          {/* <div>
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
          </section> */}
        </div>
      </AdminDashboardLayout>
    </div>
  );
};

export default Content;
