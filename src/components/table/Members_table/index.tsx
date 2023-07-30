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

import Option from "../../../assets/icons/ellipsisHorizontal.svg";
import View from "../../../assets/icons/view.svg";
import Delete from "../../../assets/icons/delete.svg";
import { IMember } from "../../../services/user/types";
import { deleteSingleMember, getAllMembers } from "../../../services/user";
import { Modals } from "../../../redux/slices/ui/types";
import { toggleModal } from "../../../redux/slices/ui";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { Input } from "../../../lib/form/Input";

import ConfirmationModal from "../../modal/Confirmation";

const MembersTable = () => {
  const { palette } = useTheme();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const [memberApiResponse, setMemberApiResponse] = useState<IMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getAllMembers().then((res) => {
      setMemberApiResponse(res.data.results);
      if (res.success === true) {
        setLoading(false);
      }
    });
  }, [memberApiResponse]);

  const openDeleteModal = (member: IMember) => {
    dispatch(
      toggleModal({
        name: Modals.CONFIRMATION,
        props: {
          confirmFunction() {
            return deleteSingleMember(member._id);
          },
          onClosed() {
            getAllMembers();
          },
          header: "Delete Branch",
          desc: `Are you sure you want to delete ${member.firstName}? You will permanently loose their data`,
          button: {
            text: "delete",
            color: "red",
          },
        },
      })
    );
  };
  const memberValues = memberApiResponse.map((members) => {
    return members;
  });

  const filteredValues = memberValues.filter((member: any) => {
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    const branch = `${member.branch ? member.branch.name : "-"}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase()) || branch.includes(searchQuery.toLowerCase());
  });
  const tableHeaders = ["ID", "name", "branch", "address", "group", "option"];

  return (
    <>

      <div className="mx-4">
        <Input
          type="search"
          placeholder="Search..."
          css={{
            paddingTop: 8,
            paddingBottom: 8,
            marginBottom: 10,
            borderRadius: "8px",
            // paddingLeft: 38,
            border: "1px solid #9E9E9E",
            width: "200px",
          }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
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
          {filteredValues?.map((user: any, idx) => {
            const fields = [
              idx + 1,
              [user.firstName, " ", user.lastName],
              `${user.branch ? user.branch.name : "-"}`,
              `${user.branch ? user.branch.address : "-"}`,
              user.group,
            ];
            const link = `members/${user._id}`;
            return (
              <tr key={`${user._id}`}>
                {fields.map((field, idx) => {
                  return (
                    <td key={`${idx}-${user._id}`} className="py-3">
                      <Text
                        color="blue_6"
                        className="fs-14"
                        css={{ padding: "0px 20px" }}
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
                        css={{
                          color: palette.black,
                          fontSize: 22,
                          paddingRight: "20px",
                        }}
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
                      >
                        <LinkText
                          href={link}
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
                      <DropdownItem
                        css={{ backgroundColor: "transparent !important " }}
                        onClick={() => openDeleteModal(user)}
                      >
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
      {filteredValues.length === 0 && (
  <Text color="blue_6" className="fs-14" css={{ padding: "20px" }}>
    No results found.
  </Text>
)}
      {loading && (
        <Text
          color="blue_6"
          css={{ position: "absolute", left: "50%", top: "50%" }}
        >
          Loading...
        </Text>
      )}
      <ConfirmationModal
        showModal={modals.confirmation.isOpen}
        {...modals.confirmation.props}
        toggle={() => dispatch(toggleModal({ name: Modals.CONFIRMATION }))}
      />
    </>
  );
};

export default MembersTable;
