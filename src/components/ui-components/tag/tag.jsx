import React from "react";
import classes from "./tag.module.scss";
import { string } from "prop-types";

const Tag = ({ tag }) => {
  return <div className={classes.tag}>{tag}</div>;
};
Tag.propTypes = {
  tag: string,
};
export { Tag };
