/** @jsxImportSource @emotion/react */

import {
  Routes,
  Route,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { LinkText } from "../../lib/Text";

function ActiveLinkStyle({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: false });
  const { palette } = useTheme();

  return (
    <div>
      <Link
        css={{
          backgroundColor: isActive ? palette.green : "transparent",
          borderRadius: "10px",
        }}
        className="nav-link"
        to={to}
        {...props}
      >
        <LinkText
          color="blue_6"
          css={{
            color: isActive ? palette.white : "blue_6",
            // padding: " 16px 60px"
          }}
          className="d-flex align-items-start justify-content-start w-100 nav-link fw-500 fs-17 text-capitalize"
        >
          {/* {match && <FaUserAlt/>} */}
          {children}
        </LinkText>
      </Link>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className="mx-2">
        <ActiveLinkStyle to="/junior_admin">Junior Admins</ActiveLinkStyle>
        <ActiveLinkStyle to="/branch">Branches</ActiveLinkStyle>
        <ActiveLinkStyle to="/members">Members</ActiveLinkStyle>
        <ActiveLinkStyle to="/content">Content</ActiveLinkStyle>
      </nav>
    </div>
  );
}

const NavRoutes = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="" element={<Layout />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default NavRoutes;
