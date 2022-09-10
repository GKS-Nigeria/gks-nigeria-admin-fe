/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import MembersTable from "../../components/table/Members_table";
import AdminDashboardLayout from "../../layout/AdminDashboardLayout";
import { Input } from "../../lib/form/Input";

const Members = () => {
  //link for each member id
  const link = `/members/5`;
  return (
    <div>
      <AdminDashboardLayout pageTitle="Members">
        {/* <h1>Members</h1> */}
        <div className="mx-4">
        <Input
          type="search"
          placeholder="Search..."
          css={{
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: "8px",
            // paddingLeft: 38,
            border: "1px solid #9E9E9E",
            width: "200px",
          }}
        />
        </div>
        <section id="members-table" className="my-4">
          <MembersTable />
        </section>
        <Link to={link}>temp</Link>
      </AdminDashboardLayout>
    </div>
  );
};

export default Members;
