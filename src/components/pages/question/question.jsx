import { useParams } from "react-router-dom";

export const QuestionPage = () => {
  const id = useParams().id;
  console.log(id);
  return <div>question page {id}</div>;
};
