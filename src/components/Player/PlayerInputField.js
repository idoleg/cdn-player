import React, { useState, useContext, useEffect } from "react";
import classes from "./PlayerChanger.module.scss";

import { StoreContext } from "../../store";
import { changeVideo } from "../../store/actions";

export default () => {
  const [state, dispatch] = useContext(StoreContext);
  const [url, setUrl] = useState(state.videoUrl);
  const [error, setError] = useState("");

  useEffect(() => {
    setUrl(state.videoUrl);
  }, [state.videoUrl]);

  const inputUrl = ({ currentTarget: { value } }) => {
    setUrl(value);
    setError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (url === "") {
      setError("URL is empty");
    } else {
      dispatch(changeVideo(url));
    }
  };

  return (
    <form className={classes.Changer} onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Put URL of video, which you want to watch"
        autoFocus
        className={classes.Input}
        value={url}
        onChange={inputUrl}
      />
      <input type="submit" value="Watch!" className={classes.Submit} />
      <span className={classes.Error}>{error}</span>
    </form>);
};
