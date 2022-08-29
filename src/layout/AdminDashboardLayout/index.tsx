/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */

/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import SideNav from "../../components/SideNav";
import { Text } from "../../lib/Text";
import GKS from "../../assets/image/gks.png";

interface AdminDashboardLayoutProps {
  children: any;
  pageTitle: string;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
  pageTitle,
}) => {
  const { palette } = useTheme();

  return (
    <>
      <main
        css={{
          // marginLeft: 308,
          backgroundColor: palette.background,
          minHeight: "100vh",
        }}
      >
        <div
          className="top-nav d-flex justify-content-between align-items-center"
          css={{
            borderBottom: `1px solid ${[palette.black_2]}`,
            padding: ".25rem .25rem",
            backgroundColor: "#fff",
          }}
        >
          <div className="d-flex justify-content-start align-items-center p-4">
            <img src={GKS} alt="" css={{ marginRight: "8px"}}/>
            <div>
              <Text color="blue_6" className="fs-20 fw-bold text-capitalize">
                GKS HQ
              </Text>
              <Text color="blue_6" className="fs-14 text-capitalize">
                Administrator
              </Text>
            </div>
          </div>
          <Text color="blue_6" className="fs-22" css={{ fontWeight: 500 }}>
            {pageTitle}
          </Text>
          <div></div>
        </div>
        <div
          css={{
            position: "fixed",
            left: 0,
            top: 112,
            height: "100vh",
            maxWidth: 308,
            width: "100%",
            borderRight: `1px solid ${[palette.black_2]}`,
            overflowY: "scroll",
          }}
        >
          <SideNav />
        </div>
        <div css={{ marginLeft: "310px", marginTop: "20px" }}>{children}</div>
      </main>
    </>
  );
};

export default AdminDashboardLayout;
