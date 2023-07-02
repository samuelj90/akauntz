import React, { ReactNode } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  RouteProps,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/rootReducer";
import CustomerList from "./features/customer/components/CustomerList";
import CustomerForm from "./features/customer/components/CustomerForm";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./shared/components/Sidebar";
import UnauthorizedPage from "./pages/UnauthorizedPage";

const PrivateRoute: React.FC<RouteProps> = ({ path, element }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? (
    <React.Fragment>{element}</React.Fragment>
  ) : (
    <Navigate to="/" replace />
  );
};

export interface AppRouterProps {
  children: ReactNode;
}
const AppRouter: React.FC<AppRouterProps> = ({ children }) => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<CustomerList />} />
        <Route path="/new-list" element={<CustomerForm />} />
        <Route
          path="/new"
          element={<PrivateRoute element={<CustomerForm />} />}
        />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
