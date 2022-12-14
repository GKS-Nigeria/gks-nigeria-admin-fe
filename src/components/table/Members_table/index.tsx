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
import Option from "../../../assets/icons/ellipsisHorizontal.svg";
import View from "../../../assets/icons/view.svg";
import Delete from "../../../assets/icons/delete.svg";

interface MembersTableProps {
  data?: any[];
}

const MembersTable: React.FC<MembersTableProps> = ({ data }) => {
  const { palette } = useTheme();

  data = [
    {
      _id: "1",
      name: "Emmanuel Johnson",
      branch: "Ojota",
      address: "28, Mobolaji Johnson",
      group: "chior",
    },
    {
      _id: "2",
      name: "Emmanuel Johnson",
      branch: "Ojota",
      address: "28, Mobolaji Johnson",
      group: "",
    },
    {
      _id: "3",
      name: "Emmanuel Johnson",
      branch: "Ojota",
      address: "28, Mobolaji Johnson",
      group: "chior",
    },
  ];

  const tableHeaders = ["ID", "name", "branch", "address", "group", "option"];

  return (
    <>
      <Table striped hover>
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
        {/* {loading && <TableLoader colCount={tableHeaders.length} />} */}
        <tbody css={{ backgroundColor: "#F7F9FCCC", paddingLeft: "40px" }}>
          {data?.map((user: any) => {
            const fields = [
              user._id,
              user.name,
              user.branch,
              user.address,
              user.group,
              // user.option,
            ];

            return (
              <tr key={`${user._id}`}>
                {fields.map((field) => {
                  return (
                    <td key={`${field}-${user._id}`} className="py-3">
                      <Text
                        color="blue_6"
                        className={`fs-14 ${
                          field === user.address
                            ? "text-lowercase"
                            : "text-capitalize"
                        }`}
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
                      <DropdownItem css={{ backgroundColor: "transparent" }}>
                        <LinkText
                          href=""
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
                      <DropdownItem css={{ backgroundColor: "transparent " }}>
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
