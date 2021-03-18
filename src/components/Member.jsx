import React from "react";
import "./Member.css";

function Member() {
	return (
		<div className="container member-container">
			<h1 className="title-text">Members</h1>
			<hr />
			<div className="row">
				<div className="col-lg-4 col-md-3 col-sm-1">
					<div className="card card-custom">
						<img
							class="card-img-top"
							src="https://images-ext-2.discordapp.net/external/bcbR4eIEIJ8jWBS5FtB7M-6JQyHe1S4deQMWEN2_BKo/%3Fs%3D400%26v%3D4/https/avatars.githubusercontent.com/u/50159290"
							alt="Card cap"
						></img>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Introduction</p>
						</div>
					</div>
				</div>
				<div className="col-lg">
					<div className="card card-custom">
						<img
							class="card-img-top"
							src="https://images-ext-2.discordapp.net/external/bcbR4eIEIJ8jWBS5FtB7M-6JQyHe1S4deQMWEN2_BKo/%3Fs%3D400%26v%3D4/https/avatars.githubusercontent.com/u/50159290"
							alt="Card cap"
						></img>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Introduction</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card card-custom">
						<img
							class="card-img-top"
							src="https://images-ext-2.discordapp.net/external/bcbR4eIEIJ8jWBS5FtB7M-6JQyHe1S4deQMWEN2_BKo/%3Fs%3D400%26v%3D4/https/avatars.githubusercontent.com/u/50159290"
							alt="Card cap"
						></img>
						<div className="card-body">
							<h5 className="card-title">Name</h5>
							<p className="card-text">Introduction</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Member;
