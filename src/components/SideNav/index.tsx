/** @jsxImportSource @emotion/react */

// import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../lib/Text";
import NavRoutes from "../../constants/navRoutes/index";
import { logoutUser } from "../../services/user";
// import { Navbar } from "../../constants/navLink";

const SideNav = () => {

  return (
    <nav css={{ maxWidth: "286px" }}>
      <div>
        <div css={{ margin: "3rem auto 20rem" }}>
          <NavRoutes />
          {/* <Navbar /> */}
        </div>

        <LinkText
          color="black_2"
          className="d-flex align-items-center justify-content-start btn btn-light w-90 nav-link fs-17 text-capitalize"
          css={{ marginLeft: "1rem" }}
          onClick={logoutUser}
          href="/"
        >
          <Text color="blue_6">logout</Text>
        </LinkText>
      </div>
    </nav>
  );
};

export default SideNav;
