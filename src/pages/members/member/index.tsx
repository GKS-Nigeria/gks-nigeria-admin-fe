/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "../../../layout/AdminDashboardLayout";
import { Text } from "../../../lib/Text";
import Back from "../../../assets/icons/back.svg";
import Profile from "../../../assets/icons/profile.svg";
import { useTheme } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { deleteSingleMember, getSingleMember } from "../../../services/user";
import { Button } from "../../../lib/Button";
import { toggleModal } from "../../../redux/slices/ui";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { IMember } from "../../../services/user/types";
import { Modals } from "../../../redux/slices/ui/types";
import ConfirmationModal from "../../../components/modal/Confirmation";

const Member = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const [memberApiResponse, setMemberApiResponse] = useState<any>([]);
  useEffect(() => {
    getSingleMember(id)
      .then((res) => {
        setMemberApiResponse(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const openDeleteModal = (member: IMember) => {
    dispatch(
      toggleModal({
        name: Modals.CONFIRMATION,
        props: {
          confirmFunction() {
            return deleteSingleMember(member._id);
          },
          onClosed() {
            navigate(-1);
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

  const member = memberApiResponse;

  const { palette } = useTheme();
  return (
    <div>
      <AdminDashboardLayout pageTitle="Members">
        <div className="p-4">
          <div css={{ marginBottom: "30px" }}>
            <Text
              color="blue_6"
              onClick={() => navigate(-1)}
              css={{ cursor: "pointer" }}
              className="link-btn fs-14 fw-bold"
            >
              <img src={Back} /> Back
            </Text>
          </div>

          <section className="d-flex align-items-center">
            <img
              src={Profile}
              alt=""
              width="142px"
              css={{ borderRadius: "8px" }}
            />
            <div>
              <Text color="blue_6" className="fs-16 px-4 fw-bold">
                {[member.firstName, " ", member.lastName]}
              </Text>
              <Text color="black_2" className="fs-14 px-4">
                {" "}
                {`${member.branch ? member.branch.name : "-"}`}
              </Text>
              <Text
                color="white"
                className="fs-14 px-4 py-1 mx-4 fw-bold"
                css={{ backgroundColor: palette.blue_6, borderRadius: "5px" }}
              >
                {member.groups || "Not in a group"}
              </Text>
            </div>
          </section>
          <section>
            <div css={{ marginTop: "40px" }}>
              <Text color="blue_6" className=" fs-16 fw-bold">
                Personal Info
              </Text>
              <hr />
            </div>
            <div className="d-flex-row">
              <div className="d-flex">
                Phone:
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.phone}
                </Text>
              </div>
              <div className="d-flex">
                
                Email:
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.email || "-"}
                </Text>
              </div>
              <div className="d-flex">
                
                Role:
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.role}
                </Text>
              </div>
              <div className="d-flex">
                
                Gender:
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.gender || "-"}
                </Text>
              </div>
              <div className="d-flex">
                
                Date of Birth:{" "}
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.dob || "-"}
                </Text>
              </div>
              <div className="d-flex">
                
                Address:{" "}
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.address || "-"}
                </Text>
              </div>
              <div className="d-flex">
                
                Nationality:{" "}
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.nationality || "-"}
                </Text>
              </div>
              <div className="d-flex">
                
                Member Since:{" "}
                <Text color="blue_6" className=" px-4 fs-15 fw-bold">
                  {member.createdAt}
                </Text>
              </div>
            </div>
          </section>
          <div css={{ marginTop: "100px" }}>
            <Button
              variant="red"
              className="outlined"
              onClick={() => openDeleteModal(member)}
            >
              
              Delete Member
            </Button>
          </div>
        </div>
      </AdminDashboardLayout>
      <ConfirmationModal
        showModal={modals.confirmation.isOpen}
        {...modals.confirmation.props}
        toggle={() => dispatch(toggleModal({ name: Modals.CONFIRMATION }))}
      />
    </div>
  );
};

export default Member;
