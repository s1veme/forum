import classes from "./Answer.module.scss";
import parse from "html-react-parser";
import propTypes from 'prop-types'

 const Answer = ({ content, name }) => {
  return (
    <div className={classes.answer}>
      <div className={classes.answer__content}>{parse(content)}</div>
      <div className={classes.owner__name}>{name}</div>
    </div>
  );
};

Answer.propTypes = {
  content: propTypes.string.isRequired,
  name: propTypes.string
}

export {Answer}
