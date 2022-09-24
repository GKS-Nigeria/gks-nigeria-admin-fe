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
import Option from "../../../assets/icons/ellipsisHorizontal.svg";
import View from "../../../assets/icons/view.svg";
import Edit from "../../../assets/icons/edit.svg";
import Admin from "../../../assets/icons/juniorAdmin.svg";
import Delete from "../../../assets/icons/delete.svg";
import AssignModal from "../../modal/AssignJuniorAdmin";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { toggleModal } from "../../../redux/slices/ui";
import { Modals } from "../../../redux/slices/ui/types";
import { IBranch } from "../../../services/branch/types";
import { useState, useEffect } from "react";
import { deleteSingleBranch, getAllBranch } from "../../../services/branch";
import ConfirmationModal from "../../modal/Confirmation";

const BranchesTable = () => {
  const { palette } = useTheme();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const [branchApiResponse, setBranchApiResponse] = useState<IBranch[]>([]);
  // const [numberOfBranches, setNumberOfBranches] = useState(0);

  useEffect(() => {
    getAllBranch().then((res) => {
      setBranchApiResponse(res.data.results);
    });
  }, [branchApiResponse]);

  const showAssignModal = () => {
    dispatch(
      toggleModal({
        name: Modals.ASSIGN_JUNIOR_ADMIN,
      })
    );
  };
  const numOfGroups = branchApiResponse.map((items) => {
    return (items.groups.length);
  });

  const openDeleteModal = (branch: IBranch) => {
    dispatch(
      toggleModal({
        name: Modals.CONFIRMATION,
        props: {
          confirmFunction() {
            return deleteSingleBranch(branch._id)
          },
          onClosed() {
            getAllBranch()
           
          },
          header: "Delete Branch",
          desc: `Are you sure you want to delete ${branch.name}? You will permanently loose their data`,
          button: {
            text: "delete",
            color: "red",
          },
        },
      })
    );
  };

//   const getGroupsData = (branch: IBranch) => {
//     // const link = `branch/${branch._id}`
//     return getAllGroups(branch._id)
//   }
// console.log(getGroupsData)

//  const link = `branch/${id}`
  // console.log(numOfGroups);
  // const grp = numOfGroups.map((item) => {
  //   return item
  // }
  //  )
  let grp
const groupsInABranch = () => {
  for (let i = 0 ; i < numOfGroups.length; i++ ){
      grp = numOfGroups[i]
      // {() => setNumberOfBranches(grp)}
      return grp
  }
}
const groups = groupsInABranch()

  

  
  const branchValues = branchApiResponse.map((results) => {
    return results.branch;
  });

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
          {branchValues?.map((branch: any, idx) => {
            const fields = [
               idx + 1,
              branch.name,
              branch.address,
              // branch.groups ,
              groups ,
              branch.members.length,
              branch.admins || "-",
              // branch.option,
            ];
            const link = `branch/groups/${branch._id}`
           
            return (
              <tr key={`${branch._id}`}>
                {fields.map((field,) => {
                  if (field === groups) {
                    return (
                      <td
                        key={branch._id}
                        className="align-middle"
                      >
                        <Text
                          as="span"
                          color="white"
                          className="fs-14 py-1 px-2"
                          css={{
                            backgroundColor: palette.blue_6,
                            borderRadius: 5,
                            margin: "0px 30px",
                          }}
                        >
                          {field}
                        </Text>
                      </td>
                    );
                  }
                  return (
                    <td key={branch._id} className="py-3">
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
                        // onClick={showAssignModal}
                      >
                        <LinkText
                          href={link}
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
                        onClick={() => openDeleteModal(branch)}
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

      <ConfirmationModal
        showModal={modals.confirmation.isOpen}
        {...modals.confirmation.props}
        toggle={() => dispatch(toggleModal({ name: Modals.CONFIRMATION }))}
      />


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
