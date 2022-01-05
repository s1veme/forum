import { Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../components/pages/auth/authorization/authorization";
import { RegistrationPage } from "../components/pages/auth/registration/registration";
import { CreateQuestion } from "../components/pages/createQuestion/question";
import { HomePage } from "../components/pages/home/Home";
import { QuestionPage } from "../components/pages/question/question";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/auth/authorization" element={<AuthorizationPage />} />
      <Route exact path="/auth/registration" element={<RegistrationPage />} />
      <Route exact path="/question/create" element={<CreateQuestion />} />
      <Route exact path="/question/:id" element={<QuestionPage />} />
    </Routes>
  );
};
