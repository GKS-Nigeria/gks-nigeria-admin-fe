/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "../../../layout/AdminDashboardLayout";
import { Text } from "../../../lib/Text";
import Back from "../../../assets/icons/back.svg";
import { Button } from "../../../lib/Button";
import ContentNotification from "../../../components/contents/Notification";

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminDashboardLayout pageTitle="Feed">
        <div className="p-4">
          <div css={{ marginBottom: "10px" }}>
            <Text
              color="blue_6"
              onClick={() => navigate(-1)}
              css={{ cursor: "pointer" }}
              className="link-btn fs-14 fw-bold"
            >
              <img src={Back} /> Back
            </Text>
          </div>
        <section>
            <ContentNotification />
        </section>
          <div className="d-flex justify-content-between mt-4">
              <div></div>
              <Button variant="green">Send</Button>
          </div>
        </div>
      </AdminDashboardLayout>
    </div>
  );
};

export default Notification;
