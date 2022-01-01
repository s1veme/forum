import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/pages/home/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element= {<HomePage />} />
    </Routes>
  );
};
