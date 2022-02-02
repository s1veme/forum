import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../components/pages/auth/authorization/authorization";
import { RegistrationPage } from "../components/pages/auth/registration/registration";
import { CreateQuestion } from "../components/pages/createQuestion/question";
import { HomePage } from "../components/pages/home/Home";
import { Profile } from "../components/pages/profile/profile";
import { QuestionPage } from "../components/pages/question/question";
import { Questions } from "../components/pages/questions/questions";
import { NotFound } from "../components/ui-components/404/404";

export const RoutesComponent = () => {
  const token = useSelector((state) => state.authReducer.token);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/auth/authorization" element={<AuthorizationPage />} />
      <Route exact path="/auth/registration" element={<RegistrationPage />} />
      <Route exact path="/question/:id" element={<QuestionPage />} />
      <Route exact path="/tape" element={<Questions />} />
      <Route exact path="/question/create" element={<CreateQuestion />} />
      {token ? (
        <>
          <Route exact path="/profile" element={<Profile />} />
        </>
      ) : (
        ""
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
