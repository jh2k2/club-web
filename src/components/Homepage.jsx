import React from "react";
import "./Homepage.css";
import About from "./About";

function Homepage() {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container hero-border">
					<h1 className="hero-text">Web Visual and Engineering Club</h1>
					<h3 className="hero-text-2">Computer Science Club at Ohlone Community College</h3>
				</div>
			</div>
			<About />
		</div>
	);
}

export default Homepage;
