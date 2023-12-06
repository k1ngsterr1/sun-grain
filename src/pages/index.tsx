import { FC, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

// PAGES
import { HomePage } from "./Home/ui";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const MyRoutes: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/index.html" element={<Navigate replace to="/home" />} />
        <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};
