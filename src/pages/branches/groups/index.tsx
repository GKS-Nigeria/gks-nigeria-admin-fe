/** @jsxImportSource @emotion/react */
// import { LinkText, Text } from "../../lib/Text";
// import { useState, useEffect } from 'react'
import { Button } from "../../../lib/Button";
import AdminDashboardLayout from "../../../layout/AdminDashboardLayout";
import Plus from "../../../assets/icons/plus.svg";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { toggleModal } from "../../../redux/slices/ui";
import { Modals } from "../../../redux/slices/ui/types";
import { createGroup } from "../../../services/branch";
import GroupsCard from "../../../components/GroupsCard";
import CreateGroupModal from "../../../components/modal/CreateGroup";

const Groups = () => {
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const showCreateGroupModal = () => {
    dispatch(
      toggleModal({
        name: Modals.CREATE_GROUP,
        props: { createFunction: createGroup },
      })
    );
  };

  return (
    <div>
      <AdminDashboardLayout pageTitle="Groups">
        <div className="d-flex justify-content-between">
          <div css={{ marginLeft: "20px" }} className="fw-bold fs-16">
            Branch Name
          </div>
          <Button
            variant="green"
            className="d-flex align-items-center fs-14 justify-content-center"
            css={{ margin: "0px 22px 22px 2px" }}
            onClick={showCreateGroupModal}
          >
            <img src={Plus} alt="" className="me-2" />
            Create New
          </Button>
        </div>

        <section id="groups">
          <GroupsCard />
        </section>
      </AdminDashboardLayout>

      <CreateGroupModal
        showModal={modals.createGroup?.isOpen}
        toggle={() => dispatch(toggleModal({ name: Modals.CREATE_GROUP }))}
        {...modals.createGroup?.props}
      />
    </div>
  );
};

export default Groups;
