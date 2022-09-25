/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../../lib/Text";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table,
  UncontrolledDropdown,
} from "reactstrap";
import { useState, useEffect } from "react";
// import { Routes, Route, useParams, Link } from "react-router-dom";

import Option from "../../../assets/icons/ellipsisHorizontal.svg";
import View from "../../../assets/icons/view.svg";
import Delete from "../../../assets/icons/delete.svg";
import { IMember } from "../../../services/user/types";
import { getAllMembers } from "../../../services/user";


const MembersTable = () => {
  const { palette } = useTheme();

  const [memberApiResponse, setMemberApiResponse] = useState<IMember[]>([]);

  useEffect(() => {
    getAllMembers().then((res) => {
      setMemberApiResponse(res.data.results);
    });
  }, []);
 
  const memberValues = memberApiResponse.map((members) => {
    return members;
  });

  const tableHeaders = ["ID", "name", "branch", "address", "role","group", "option"];

  return (
    <>
      <Table striped borderless>
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
                    css={{ fontWeight: 700, padding: "0px 20px" }}
                  >
                    {header}
                  </Text>
                </th>
              );
            })}
          </tr>
        </thead>
        {/* {loading && <TableLoader colCount={tableHeaders.length} />} */}
        <tbody css={{ backgroundColor: "#F7F9FCCC", paddingLeft: "40px" }}>
          {memberValues?.map((user: any, idx) => {
            const fields = [
              idx + 1,
              [user.firstName," ", user.lastName],
              user.branch,
              user.address,
              user.role,
              user.group,
              // user.option,
            ];

            return (
              <tr key={`${user._id}`}>
                {fields.map((field, idx) => {
                  return (
                    <td key={`${idx}-${user._id}`} className="py-3">
                      <Text
                        color="blue_6"
                        className="fs-14"
                        css={{padding: "0px 20px"}}
                      >
                        {field ? field : "-"}
                      </Text>
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
                        css={{ color: palette.black, fontSize: 22, paddingRight: "20px" }}
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
                      <DropdownItem css={{ backgroundColor: "transparent !important" }}>
                        <LinkText
                          href="/members/id"
                          color="blue_6"
                          className="fs-14 fw-500"
                        >
                          <img
                            src={View}
                            alt=""
                            css={{ color: palette.black, paddingRight: "5px" }}
                          />
                          View
                        </LinkText>
                      </DropdownItem>
                      <DropdownItem css={{ backgroundColor: "transparent !important " }}>
                        <Text color="red" className="fs-14 fw-500">
                          <img
                            src={Delete}
                            alt=""
                            css={{ color: palette.red, paddingRight: "10px" }}
                          />
                          Delete
                        </Text>
                      </DropdownItem>
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

export default MembersTable;
