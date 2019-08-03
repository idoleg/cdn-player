import React from "react";
import classes from "./PageSection.module.css";

export default (props) => (
	<main className={[classes.PageSection, props.className].join(" ")}>
		<section className={classes.Content}>
			<header className={classes.Title}>{props.title || "Title"}</header>
			{props.children}
		</section>
	</main>
);
