/* eslint-disable @typescript-eslint/no-var-requires */
/** @jsxImportSource @emotion/react */
// import { useTheme } from "@emotion/react";
import JuniorAdmin from "./pages/junior_admins";
import Login from "./pages/login";
import Members from "./pages/members";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/theme/index";
import Branches from "./pages/branches";
import Content from "./pages/content";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { store } from "./redux/store";
import Member from "./pages/members/member";
import Feed from "./pages/content/feed";
import Announcement from "./pages/content/announcement";
import Notification from "./pages/content/notification";
import Calender from "./pages/content/calender";
import DailyDevotion from "./pages/content/dailyDevotion";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    //     <div className="App">
    // <h1 css={{
    //   color: "black"
    // }}>Trying something </h1>
    // <Login />
    //     </div>
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/junior_admin/*" element={<JuniorAdmin />} />
            <Route path="/branch/*" element={<Branches />} />
            <Route path="/content/*" element={<Content />} />
            <Route path="/content/feed" element={<Feed />} />
            <Route path="/content/announcement" element={<Announcement />} />
            <Route path="/content/notification" element={<Notification />} />
            <Route path="/content/calender" element={<Calender />} />
            <Route path="/content/dailyDevotion" element={<DailyDevotion />} />
            <Route path="members/*" element={<Members />} />
            <Route path="members/:id" element={<Member />} />
          </Routes>
          <ToastContainer />
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
