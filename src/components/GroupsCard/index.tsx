/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../lib/Text";
import Members from "../../assets/icons/groupMembers.svg";
import Ellipsis from "../../assets/icons/ellipsisVerticalLight.svg";
import Delete from "../../assets/icons/delete.svg";
import Edit from "../../assets/icons/edit.svg";
import { IBranch } from "../../services/branch/types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteSingleGroup, getAllGroups } from "../../services/branch";
import { toggleModal } from "../../redux/slices/ui";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Modals } from "../../redux/slices/ui/types";
import ConfirmationModal from "../modal/Confirmation";

const GroupsCard = () => {
  const { id } = useParams();

  const [groupsApiResponse, setGroupsApiResponse] = useState<IBranch[]>([]);
  useEffect(() => {
    getAllGroups(id).then((res) => {
      setGroupsApiResponse(res.data.results);
    });
  }, [groupsApiResponse]);

  const groupValues = groupsApiResponse.map((result) => {
    return result;
  });
  const { palette } = useTheme();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const openDeleteModal = (group: IBranch) => {
    dispatch(
      toggleModal({
        name: Modals.CONFIRMATION,
        props: {
          confirmFunction() {
            return deleteSingleGroup(group._id);
          },

          header: "Delete Branch",
          desc: `Are you sure you want to delete ${group.name}? You will permanently loose their data`,
          button: {
            text: "delete",
            color: "red",
          },
        },
      })
    );
  };
  return (
    <div className="d-flex flex-wrap ">
      {groupValues?.map((group: IBranch, idx) => {
        return (
          <div
            key={idx}
            css={{
              width: "250px",
              height: "110px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: palette.blue_6,
            }}
            className="m-4"
          >
            <div>
              <div>
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
                      alt=""
                      src={Ellipsis}
                      width="4px"
                      css={{ position: "absolute", left: "230px" }}
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
                      <LinkText href="" color="blue_6" className="fs-14 fw-500">
                        <img
                          src={Edit}
                          alt=""
                          css={{
                            color: palette.black,
                            width: "22px",
                            paddingRight: "5px",
                          }}
                        />
                        Edit
                      </LinkText>
                    </DropdownItem>
                    <DropdownItem
                      css={{ backgroundColor: "transparent !important" }}
                      onClick={() => openDeleteModal(group)}
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
                        Delete
                      </Text>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="d-flex-col justify-content-between">
              <div className="d-flex justify-content-center ">
                <Text color="white" className="fs-16 fw-bold">
                  {group.name}
                </Text>
              </div>
              <div className="d-flex justify-content-between p-4">
                <Text color="white" className="fs-14">
                  <img src={Members} alt="" css={{ paddingRight: "8px" }} />
                  {group.members.length}
                </Text>
                <Text color="white" className="fs-12">
                  branch name
                </Text>
              </div>
            </div>
          </div>
        );
      })}
      <ConfirmationModal
        showModal={modals.confirmation.isOpen}
        {...modals.confirmation.props}
        toggle={() => dispatch(toggleModal({ name: Modals.CONFIRMATION }))}
      />
    </div>
  );
};

export default GroupsCard;
