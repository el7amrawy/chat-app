import { BrowserRouter, Route, Routes } from "react-router-dom";
import config from "./config";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
