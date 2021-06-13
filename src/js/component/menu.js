import React from "react";
import "bootstrap";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a className="navbar-brand" href="#">
				Start React
			</a>
			<button
				className="navbar-toggler collapsed"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar-collapse collapse" id="navbarCollapse">
				<ul className="navbar-nav mr-auto ">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							More
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
