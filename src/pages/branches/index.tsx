/** @jsxImportSource @emotion/react */
// import { LinkText, Text } from "../../lib/Text";
import { useState, useEffect } from "react";
import { Button } from "../../lib/Button";
import BranchesTable from "../../components/table/Branches_table";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";
import Plus from "../../assets/icons/plus.svg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { toggleModal } from "../../redux/slices/ui";
import { Modals } from "../../redux/slices/ui/types";
import CreateBranchModal from "../../components/modal/createBranch";
import { createBranch, getAllBranch } from "../../services/branch";

const Branches = () => {
  const [numberOfBranches, setNumberOfBranches] = useState("");

 
  useEffect(() => {
    getAllBranch()
      .then((res) => {
        setNumberOfBranches(res.data.results.length);
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    ui: { modals },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const showCreateBranchModal = () => {
    dispatch(
      toggleModal({
        name: Modals.CREATE_BRANCH,
        props: { createFunction: createBranch },
      })
    );
  };

  return (
    <div>
      <AdminDashboardLayout pageTitle="Branches">
        <div className="d-flex justify-content-between">
          <div css={{ marginLeft: "20px" }}>
            Number of Branches: {numberOfBranches}
          </div>

 
<Button
            variant="green"
            className="d-flex align-items-center fs-14 justify-content-center"
            css={{ margin: "0px 22px 22px 2px" }}
            onClick={showCreateBranchModal}
          >
            <img src={Plus} alt="" className="me-2" />
            Create New
          </Button>

    
        </div>

        <section id="members-table">
          <BranchesTable
          // data={branch?.data}
          />
        </section>
      </AdminDashboardLayout>

      <CreateBranchModal
        showModal={modals.createBranch?.isOpen}
        toggle={() => dispatch(toggleModal({ name: Modals.CREATE_BRANCH }))}
        {...modals.createBranch?.props}
      />
    </div>
  );
};

export default Branches;
