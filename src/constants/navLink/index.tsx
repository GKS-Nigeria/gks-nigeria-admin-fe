// /** @jsxImportSource @emotion/react */
// import { NavLink } from "react-router-dom";
// import { useTheme } from "@emotion/react";
// import { LinkText } from "../../lib/Text";

// export const Navbar = () => {
//     const { palette } = useTheme();
//     const navLinkStyles = ({isActive}) => {
//         return {
//             backgroundColor: isActive ? palette.green : "transparent",
//             borderRadius: "10px",
//           }
          
//     }
//         return (
//           <div>
//             <nav>
//                   <NavLink style={navLinkStyles} to="/junior_admin">
//                     {/* <img src={AdminActive} alt=""
//                               css={{ paddingRight: "10px" }}
//                             /> */}
//                     Junior Admins
//                   </NavLink>
                
//                   <NavLink style={navLinkStyles} to="/branch">Branches</NavLink>

//                   <NavLink style={navLinkStyles} to="/members">Members</NavLink>
//                   <NavLink style={navLinkStyles} to="/content">Content</NavLink>
//             </nav>
      
//             {/* <Outlet /> */}
//           </div>
//         );
// } 