import React from "react";
import classes from "./Greeting.module.css";
import PageSection from "../PageSection/PageSection"

export default (props) => (
  <PageSection title="What's up?" className={classes.Greeting}>
    <p>
      Welcome to CDN online player.
    </p>
    <p>
      Why do you need it? Unfortunately, a built-in browser player doesn't have useful features.
      It does not have video speed control, browsing history and opportunities to create playlists.
    </p>
  </PageSection>
);
