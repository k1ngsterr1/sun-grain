import { FC } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ROUTE_CONSTANTS } from "../shared/config/routes";

// PAGES
import { HomePage } from "./Home/ui";

export const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/index.html" element={<Navigate replace to="/home" />} />
        <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
};
