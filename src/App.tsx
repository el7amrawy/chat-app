import { BrowserRouter, Route, Routes } from "react-router-dom";
import config from "./config";

const App = () => {
  return (
    <BrowserRouter basename={config.base}>
      <Routes>
        <Route path="/">
          <Route index element={<>test</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
