import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import config from "./config";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ChatPage from "./pages/ChatPage";
import UserProvider from "./context/UserProvider";
import ProtectedUser from "./components/ProtectedUser";
import Alert from "./components/Alert";
import AlertProvider from "./context/AlertProvider";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route
          path="/"
          element={
            <UserProvider>
              <AlertProvider>
                <Alert />
                <Outlet />
              </AlertProvider>
            </UserProvider>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route
            path="u"
            element={
              <ProtectedUser>
                <Alert />
                <Outlet />
              </ProtectedUser>
            }
          >
            <Route path=":username/chat" element={<ChatPage />} />
          </Route>
        </Route>
        <Route path="*" element={<>404 not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
