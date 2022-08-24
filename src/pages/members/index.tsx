import React from 'react';
import MembersTable from '../../components/table/Members_table';
import AdminDashboardLayout from '../../layout/AdminDashboardLayout';

const Members = () => {
  return (
    <div>
      <AdminDashboardLayout pageTitle="Members" >
      {/* <h1>Members</h1> */}
      <input type="search" placeholder="Search"/>
      <section id="members-table">
        <MembersTable />
      </section>
      </AdminDashboardLayout>
    </div>
  );
}

export default Members;
