
import React from "react";
import PageSection from "../PageSection/PageSection";
import Player from "./Player";
import classes from "./PlayerChanger.module.scss";

export default class PlayerChanger extends React.Component {
    state = {
    	error: null,
    	value: "",
    	url: null
    }
    constructor() {
    	super();

    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
    	this.setState({ value: event.target.value, error: null });
    }
    handleSubmit(event) {
    	if(this.state.value === ""){
    		this.setState({ error: "URL is empty" });
    	}else{
    		this.setState({ url: this.state.value });
    	}
        
    	event.preventDefault();
    }
    render() {
    	return <PageSection title="CDN online player">
    		{this.state.url && <Player url={this.state.url} />}

    		<form className={classes.Changer} onSubmit={this.handleSubmit}>
    			<input 
    				type="url" 
    				placeholder="Put URL of video, which you want to watch" 
    				autoFocus 
    				className={classes.Input} 
    				value={this.state.value} 
    				onChange={this.handleChange}
    			/>
    			<input type="submit" value="Watch!" className={classes.Submit} />
    			<span className={classes.Error}>{this.state.error}</span>
    		</form>

    	</PageSection>;
    }
}