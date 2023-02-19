import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import config from "./config";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import Chat from "./pages/Chat";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route
          path="/"
          element={
            <UserProvider>
              <Outlet />
            </UserProvider>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="u" element={<UserPage />}>
            <Route path="chat" element={<Chat />} />
            {/* <Route path=":user_id" element={} /> */}
          </Route>
        </Route>
        <Route path="*" element={<>404 not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
