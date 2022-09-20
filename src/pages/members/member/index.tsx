/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import AdminDashboardLayout from "../../../layout/AdminDashboardLayout";
import { Text } from "../../../lib/Text";
import Back from "../../../assets/icons/back.svg";
import Profile from "../../../assets/image/profile.png";
import { useTheme } from "@emotion/react";

const Member = () => {
  const navigate = useNavigate();
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
                Christine Ugochwuku
              </Text>
              <Text color="black_2" className="fs-14 px-4"> Okota Branch</Text>
              <Text color="white" className="fs-14 px-4 py-1 mx-4 fw-bold" css={{backgroundColor: palette.blue_6, borderRadius: "5px"}}> Choir</Text>
            </div>
          </section>
          <section>
            <div css={{ marginTop: "40px" }}>
              <Text color="blue_6" className=" fs-16 fw-bold">
                Personal Info
              </Text>
              <hr />
            </div>
          </section>
        </div>
        {/* <Outlet /> */}
      </AdminDashboardLayout>
    </div>
  );
};

export default Member;
