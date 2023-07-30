/** @jsxImportSource @emotion/react */
// import { Link } from "react-router-dom";
import MembersTable from "../../components/table/Members_table";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";

const Members = () => {
  //link for each member id
  // const link = `/members/5`;
  return (
    <div>
      <AdminDashboardLayout pageTitle="Members">
        {/* <h1>Members</h1> */}

        <section id="members-table" className="my-4">
          <MembersTable />
        </section>
      </AdminDashboardLayout>
    </div>
  );
};

export default Members;
