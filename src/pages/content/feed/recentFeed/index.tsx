/** @jsxImportSource @emotion/react */
// import { Link } from "react-router-dom";
import AdminDashboardLayout from "../../../../layout/AdminDashboardLayout";
import { Input } from "../../../../lib/form/Input";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../../lib/Text";
import Back from "../../../../assets/icons/back.svg";
import FeedTable from "../../../../components/table/Feed_table";

const RecentFeed = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminDashboardLayout pageTitle="Feed">
        <div css={{ margin: "10px" }}>
          <Text
            color="blue_6"
            onClick={() => navigate(-1)}
            css={{ cursor: "pointer" }}
            className="link-btn fs-14 fw-bold"
          >
            <img src={Back} /> Back
          </Text>
        </div>

        <div className="m-4">
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
        <section className="my-2">
          <FeedTable />
        </section>
      </AdminDashboardLayout>
    </div>
  );
};

export default RecentFeed;
