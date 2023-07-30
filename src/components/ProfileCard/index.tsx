/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import {
  Card,
  CardBody,
  CardSubtitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Text } from "../../lib/Text";
import Location from "../../assets/icons/location.svg";
import Profile from "../../assets/icons/profile.svg";
import Ellipsis from "../../assets/icons/ellipsisVertical.svg";
import Delete from "../../assets/icons/delete.svg";
// import Edit from "../../assets/icons/edit.svg";
import { IJuniorAdmin } from "../../services/user/types";
import { deleteSingleJuniorAdmin, getAllJuniorAdmins } from "../../services/user";
import { toggleModal } from "../../redux/slices/ui";
import { Modals } from "../../redux/slices/ui/types";
import ConfirmationModal from "../modal/Confirmation";
import { useAppSelector, useAppDispatch } from "../../hooks";

const ProfileCard = () => {
  const { palette } = useTheme();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  
  const [juniorAdminApiResponse, setJuniorAdminApiResponse] = useState<
  IJuniorAdmin[]
  >([]);
  const [loading, setLoading] = useState(true);
  // const [memberApiResponse, setMemberApiResponse] = useState<any>([]);

  useEffect(() => {
    getAllJuniorAdmins().then((res) => {
      setJuniorAdminApiResponse(res.data.results);
      if (res.success === true) {
        setLoading(false);
      }
    });
  }, []);

  const openDeleteModal = (juniorAdmin: IJuniorAdmin) => {
    dispatch(
      toggleModal({
        name: Modals.CONFIRMATION,
        props: {
          confirmFunction() {
            return deleteSingleJuniorAdmin(juniorAdmin);
          },
          onClosed() {
            getAllJuniorAdmins();
          },
          header: "Delete Branch",
          desc: `Are you sure you want to delete ${juniorAdmin.adminId.firstName}? You will permanently loose their data`,
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
      {juniorAdminApiResponse?.map((user: IJuniorAdmin) => {
        return (
          <div key={user._id}>
            { user.adminId ?
            
          <Card
            key={user._id}
            css={{
              width: "200px",
              height: "260px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: palette.black_3,
            }}
            className="d-flex m-4 justify-content-between"
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
                      css={{ position: "absolute", left: "180px" }}
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
                    {/* <DropdownItem
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
                    </DropdownItem> */}
                    <DropdownItem
                      css={{ backgroundColor: "transparent !important" }}
                      onClick={() => openDeleteModal(user)}
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

              <img
                alt=""
                src={Profile}
                width="66px"
                css={{ margin: "10px 40px 0px 70px" }}
              />
            </div>
              
            <CardBody
              css={{
                backgroundColor: palette.blue_6,
                borderRadius: "10px",
                maxHeight: "102px",
              }}
            >
              <Text color="white">{user.adminId.firstName} {user.adminId.lastName}</Text>
              <CardSubtitle className="mb-3 text-muted" tag="h6">
                {/* {user.group} */}
              </CardSubtitle>
              <Text color="white" className="fs-14">
                <img src={Location} alt="" css={{ paddingRight: "8px" }} />
            
                {user.branchId ? user.branchId.name : "Not in a branch"}
                
              </Text>
            </CardBody>
          </Card> : ""}
          </div>
        );
      })}
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
    </div>
  );
};

export default ProfileCard;
