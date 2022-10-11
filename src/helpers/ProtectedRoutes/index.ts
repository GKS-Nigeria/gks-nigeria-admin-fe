// import { useNavigate,  } from "react-router-dom";


// const ProtectedRoutes = () => {
//     const navigate = useNavigate();
//     // let auth = localStorage.getItem("token")
//      let auth = {'token': true}
    
//     return (
//         auth.token ? <Outlet /> : navigate(-1)
//     )

 
// //    

// // if(!auth){
// //     return <Navigate to="/" />
// // } else {
// //     return children
// // }
  
// }

// export default ProtectedRoutes;

// import { Navigate } from "react-router-dom";
// // import { useAuth } from "../auth/useAuth";

// function PrivateRoute({ children }) {
//   const auth = {'token': true}
//   return auth.token ? children : <Navigate to="/login" />;
// }

// export default PrivateRoute;