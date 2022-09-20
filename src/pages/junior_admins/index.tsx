/** @jsxImportSource @emotion/react */

import { Button } from "../../lib/Button";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";
import Plus from "../../assets/icons/plus.svg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { toggleModal } from "../../redux/slices/ui";
import { Modals } from "../../redux/slices/ui/types";
import CreateJuniorAdminModal from "../../components/modal/CreateJuniorAdmin";
import ProfileCard from "../../components/ProfileCard";
import { createJuniorAdmin, getAllJuniorAdmins } from "../../services/user";
import useSWR from 'swr'

const JuniorAdmin = () => {

  const {
    data: juniorAdmin,
  } = useSWR(() => getAllJuniorAdmins());
  
  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const showCreateJuniorAdminModal = () => {
    dispatch(
      toggleModal({
        name: Modals.CREATE_JUNIOR_ADMIN,
        props: { createFunction: createJuniorAdmin, }
        
      })
    );
  };

  return (
    <div>
      <AdminDashboardLayout pageTitle="Junior Admin">
        {/* <h1>Junior admin</h1> */}
        <div className="d-flex justify-content-between">
          <div></div>

          <Button
            variant="green"
            className="d-flex align-items-center fs-14 justify-content-center"
            css={{ margin: "0px 22px 22px 2px" }}
            onClick={showCreateJuniorAdminModal}
          >
            <img src={Plus} alt="" className="me-2" />
            Create New
          </Button>
        </div>
        <section id="juniorAdmin" >
          <ProfileCard 
          data={juniorAdmin?.data}
          />
        </section>
      </AdminDashboardLayout>
      <CreateJuniorAdminModal
        showModal={modals.createJuniorAdmin?.isOpen}
        toggle={() =>
          dispatch(toggleModal({ name: Modals.CREATE_JUNIOR_ADMIN }))
        }
        {...modals.createJuniorAdmin?.props}
      />
    </div>
  );
};

export default JuniorAdmin;
