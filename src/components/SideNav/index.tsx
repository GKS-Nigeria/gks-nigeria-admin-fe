/** @jsxImportSource @emotion/react */

// import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../lib/Text";
import NavRoutes from "../../constants/navRoutes/index";

const SideNav = () => {
  //   const { palette } = useTheme();
  //   const router = useRoutes();

  return (
    <nav css={{ maxWidth: "286px" }}>
      <div>
        <div css={{ margin: "3rem auto 20rem" }}>
          <NavRoutes />
        </div>

        <LinkText
          color="black_2"
          className="d-flex align-items-center justify-content-start btn btn-light w-90 nav-link fs-17 text-capitalize"
          css={{ marginLeft: "1rem" }}
        >
          <Text color="blue_6">logout</Text>
        </LinkText>
      </div>
    </nav>
  );
};

export default SideNav;
