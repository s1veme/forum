import { Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../components/pages/auth/authorization/authorization";
import { HomePage } from "../components/pages/home/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/auth/authorization" element={<AuthorizationPage />} />
    </Routes>
  );
};
