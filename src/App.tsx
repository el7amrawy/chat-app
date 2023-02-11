import { BrowserRouter, Route, Routes } from "react-router-dom";
import config from "./config";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import User from "./components/User";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="u" element={<UserPage />}>
            <Route path=":user_id" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<>404 not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
