/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { Text } from "../../../lib/Text";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
} from "reactstrap";

import Option from "../../../assets/icons/ellipsisHorizontal.svg";
import { useState, useEffect } from "react";
import { IContent } from "../../../services/content/types";
import { getAllNotifications } from "../../../services/content";

const NotificationTable = () => {
  const { palette } = useTheme();

  const [notificationApiResponse, setNotificationApiResponse] = useState<IContent[]>([]);

  useEffect(() => {
    getAllNotifications().then((res) => {
        setNotificationApiResponse(res.data.results);
    });
  }, []);

  const notifications = notificationApiResponse.map((notification) => {
    return notification;
  });
console.log(notifications)
  const tableHeaders = [
    "#",
    "icon",
    "content",
    "date updated",
    "option",
  ];

  return (
    <>
      <Table striped borderless hover>
        <thead>
          <tr>
            {tableHeaders.map((header, idx) => {
              if (header === "option") {
                return <th key={`${header}-${idx}`}> </th>;
              }
              return (
                <th key={`${header}-${idx}`}>
                  <Text
                    color="blue_6"
                    className="fs-12 text-capitalize"
                    css={{ fontWeight: 700 }}
                  >
                    {header}
                  </Text>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody css={{ backgroundColor: "#F7F9FCCC", paddingLeft: "40px" }}>
          {notifications?.map((notification: any, idx) => {
            const fields = [
              idx + 1,
              notification.icon,
              notification.body,
              notification.createdAt,
            ];

            return (
              <tr key={`${notification._id}`}>
                {fields.map((field, idx) => {
                  return (
                    <td key={`${idx}-${notification._id}`} className="py-3">
                      <Text color="blue_6" css={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{field ? field : "-"}</Text>
                    </td>
                  );
                })}
                <td className="py-3">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      css={{
                        backgroundColor: "transparent !important",
                        padding: 0,
                        border: "0 !important",
                        boxShadow: "none !important",
                      }}
                    >
                      <img
                        src={Option}
                        alt=""
                        css={{ color: palette.black, fontSize: 22 }}
                      />
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
                      ></DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default NotificationTable;
