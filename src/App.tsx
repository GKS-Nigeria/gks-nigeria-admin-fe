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
import { store } from "./redux/store";

const { Routes, Route } = require("react-router-dom");

function App() {
  return (
    //     <div className="App">
    // <h1 css={{
    //   color: "black"
    // }}>Trying something out</h1>
    // <Login />
    //     </div>
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/junior_admin/*" element={<JuniorAdmin />} />
            <Route path="/branch/*" element={<Branches />} />
            <Route path="/content/*" element={<Content />} />
            <Route path="/members/*" element={<Members />} />
          </Routes>
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
