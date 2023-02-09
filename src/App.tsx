import { BrowserRouter, Route, Routes } from "react-router-dom";
import config from "./config";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
