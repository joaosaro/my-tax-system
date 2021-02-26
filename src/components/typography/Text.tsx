import React, { FC, HTMLAttributes } from "react";
import cc from "classcat";
import "./styles.scss";

type Tags = "span" | "p";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  as: Tags;
}

const Text: FC<Props> = ({ children, className, as = "span", ...props }) => {
  const classes = cc([`text`, className]);
  const Tag = as;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
