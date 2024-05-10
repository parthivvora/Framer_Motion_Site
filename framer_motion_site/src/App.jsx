import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import apiRoutes from "./constants/apiRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={apiRoutes.HOME} element={<Home />} />
          <Route path={apiRoutes.ABOUT} element={<About />} />
          <Route path={apiRoutes.SERVICE} element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
