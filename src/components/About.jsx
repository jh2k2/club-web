import React from "react";
import "./About.css";

function About() {
	return (
		<div className="container" id="about">
			<h1>About</h1>
			<div className="row">
				<div className="col">
					<h3>Hi</h3>
					<hr />
					<p>Hi body</p>
				</div>
				<div className="col">
					<img
						className="about-image"
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						alt=""
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<img
						className="about-image-even"
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						alt=""
					/>
				</div>
				<div className="col">
					<h3>Hi</h3>
					<hr />
					<p>Hi body</p>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h3>Hi</h3>
					<hr />
					<p>Hi body</p>
				</div>
				<div className="col">
					<img
						className="about-image"
						src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
