import React from "react";
import classes from "./Link.module.scss";

export default (props) => {
  if (props.tag === "button") {
    return <button className={classes.Link} onClick={props.onClick}>
      {props.children}
    </button>;
  } else {
    return <a className={classes.Link} href={props.href || "#"}>
      {props.children}
    </a>;
  }
};
