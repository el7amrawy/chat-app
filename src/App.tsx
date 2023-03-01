import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import config from "./config";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ChatPage from "./pages/ChatPage";
import Chat from "./components/Chat";
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
          <Route path="u" element={<ChatPage />}>
            <Route path=":username/chat" element={<Chat />} />
          </Route>
        </Route>
        <Route path="*" element={<>404 not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
