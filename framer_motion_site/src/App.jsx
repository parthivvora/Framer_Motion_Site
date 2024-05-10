import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import apiRoutes from "./constants/apiRoutes";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={apiRoutes.HOME} element={<Home />} />
          <Route path={apiRoutes.ABOUT} element={<About />} />
          <Route path={apiRoutes.SERVICE} element={<Service />} />
          <Route path={apiRoutes.PORTFOLIO} element={<Portfolio />} />
          <Route path={apiRoutes.BLOG} element={<Blog />} />
          <Route path={apiRoutes.CONTACT} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
