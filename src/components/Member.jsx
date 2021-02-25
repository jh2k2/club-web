import React from "react";
import "./Member.css";

function Member() {
	return (
		<div className="container member-container">
			<h1 className="title-text text-center">Members</h1>

			<div className="card card-custom">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				</div>
			</div>
		</div>
	);
}

export default Member;
