import React, { FC, HTMLAttributes } from "react";
import cc from "classcat";
import "./styles.scss";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
}

const Heading: FC<Props> = ({ children, className, level = 1, ...props }) => {
  const classes = cc([`heading--${level}`, className]);
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
