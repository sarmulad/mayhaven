import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "utils/constants";
import {
  Home,
  Blog
  // About,
} from "pages";

const MayhavenRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.blog} element={<Blog />} />

        {/* <Route path={routes.about} element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default MayhavenRoutes;
