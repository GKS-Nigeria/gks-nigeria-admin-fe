/** @jsxImportSource @emotion/react */

import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { LinkText } from "../../lib/Text";
import Admin from "../../assets/icons/juniorAdmin.svg";
import AdminActive from "../../assets/icons/juniorAdmin-active.svg";

function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });
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
          className="d-flex align-items-center justify-content-start w-100 nav-link fw-500 fs-17 text-capitalize"
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
      <nav>
        <ul css={{ listStyle: "none" }}>
          <li>
            <CustomLink to="/junior_admin">
              {/* <img src={AdminActive} alt=""
                        css={{ paddingRight: "10px" }}
                      /> */}
              Junior Admins
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/branch">Branches</CustomLink>
          </li>
          <li>
            <CustomLink to="/members">Members</CustomLink>
          </li>
          <li>
            <CustomLink to="/content">Content</CustomLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

const NavRoutes = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default NavRoutes;
