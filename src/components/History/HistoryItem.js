import React from "react";
import classes from "./HistoryItem.module.scss";

export default ({ item, changeVideo }) => {
  const splitedLink = splitLink(item.source);

  return <button className={classes.Item} onClick={() => changeVideo(item.source)}>
    <span className={classes.Source}>
      <span className={classes.UrlFirst}>{splitedLink[0]}</span>
      <span className={classes.UrlSecond}>...{splitedLink[1]}</span>
    </span>
    <footer className={classes.Extra}>
      <span className={classes.Time}>Last time: {convertTime(item.time)}</span>
      <span className={classes.Date}>Date viewed: {item.date}</span>
    </footer>
  </button>;
};

export function splitLink(link) {
  link = "" + link;
  return [link.substring(0, link.length - 10), link.substring(link.length - 10)];
}

export function convertTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60);

  if (!seconds) {
    return minutes + " min";
  } else if (!minutes) {
    return seconds + " sec";
  } else {
    return `${minutes} min ${seconds} sec`;
  }
}
