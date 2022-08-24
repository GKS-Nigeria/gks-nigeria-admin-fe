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
import Edit from "../../../assets/icons/edit.svg";
import Admin from "../../../assets/icons/juniorAdmin.svg";
import Delete from "../../../assets/icons/delete.svg";
import AssignModal from "../../modal/AssignJuniorAdmin";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { toggleModal } from "../../../redux/slices/ui";
import { Modals } from "../../../redux/slices/ui/types";

interface BranchesTableProps {
  data?: any[];
}

const BranchesTable: React.FC<BranchesTableProps> = ({ data }) => {
  const { palette } = useTheme();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const showAssignModal = () => {
    dispatch(
      toggleModal({
        name: Modals.ASSIGN_JUNIOR_ADMIN,
      })
    );
  };

  data = [
    {
      _id: "1",
      branch: "Ojota",
      address: "28, Mobolaji Johnson",
      groups: "6",
      members: "34",
      junior_admin: "Joseph Olaitan",
    },
    {
      _id: "2",
      branch: "Lekki",
      address: "28, Mobolaji Johnson",
      groups: "13",
      members: "231",
      junior_admin: "Victoria John",
    },
    {
      _id: "3",
      branch: "Lekki",
      address: "28, Mobolaji Johnson",
      groups: "13",
      members: "231",
      junior_admin: "Victoria Adams",
    },
    {
      _id: "4",
      branch: "Isolo",
      address: "28, Mobolaji Johnson",
      groups: "24",
      members: "331",
      junior_admin: "",
    },
  ];

  const tableHeaders = [
    "#",
    "branch",
    "address",
    "groups",
    "members",
    "jnr admins",
    "option",
  ];

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
        <tbody css={{ backgroundColor: "#F7F9FCC", paddingLeft: "40px" }}>
          {data?.map((user: any) => {
            const fields = [
              user._id,
              user.branch,
              user.address,
              user.groups,
              user.members,
              user.junior_admin,
              // user.option,
            ];

            return (
              <tr key={`${user._id}`}>
                {fields.map((field) => {
                  if (field === user.groups) {
                    return (
                      <td key={`${field}-${user._id}`} className="align-middle">
                        <Text
                          as="span"
                          color="white"
                          className="fs-14 py-1 px-2"
                          css={{
                            backgroundColor: palette.blue_6,
                            borderRadius: 5,
                          }}
                        >
                          {field}
                        </Text>
                      </td>
                    );
                  }
                  return (
                    <td key={`${field}-${user._id}`} className="py-3">
                      <Text color="blue_6" className="fs-14">
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
                      <DropdownItem
                        css={{ backgroundColor: "transparent !important" }}
                        onClick={showAssignModal}
                      >
                        <LinkText
                          href=""
                          color="blue_6"
                          className="fs-14 fw-500"
                        >
                          <img
                            src={View}
                            alt=""
                            css={{
                              color: palette.black,
                              width: "22px",
                              paddingRight: "5px",
                            }}
                          />
                          View Groups
                        </LinkText>
                      </DropdownItem>
                      <DropdownItem
                        css={{ backgroundColor: "transparent !important" }}
                        onClick={showAssignModal}
                      >
                        <Text color="blue_6" className="fs-14 fw-500">
                          <img
                            src={Admin}
                            alt=""
                            css={{
                              color: palette.black,
                              width: "22px",
                              paddingRight: "5px",
                            }}
                          />
                          Assign Admin
                        </Text>
                      </DropdownItem>
                      <DropdownItem
                        css={{ backgroundColor: "transparent !important" }}
                      >
                        <LinkText
                          href=""
                          color="blue_6"
                          className="fs-14 fw-500"
                        >
                          <img
                            src={Edit}
                            alt=""
                            css={{
                              color: palette.black,
                              width: "22px",
                              paddingRight: "5px",
                            }}
                          />
                          Edit Branch
                        </LinkText>
                      </DropdownItem>
                      <DropdownItem
                        css={{ backgroundColor: "transparent !important" }}
                      >
                        <Text color="red" className="fs-14 fw-500">
                          <img
                            src={Delete}
                            alt=""
                            css={{
                              color: palette.red,
                              width: "22px",
                              paddingRight: "10px",
                            }}
                          />
                          Delete Branch
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
      <AssignModal
        showModal={modals.assignJuniorAdmin?.isOpen}
        toggle={() =>
          dispatch(toggleModal({ name: Modals.ASSIGN_JUNIOR_ADMIN }))
        }
        {...modals.assignJuniorAdmin?.props}
      />
    </>
  );
};

export default BranchesTable;
