import React from "react";
import "bootstrap";
export function Jumbotron() {
	return (
		<div className="jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component.
			</p>
			<h1 className="my-4">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to action!
				</a>
			</h1>
		</div>
	);
}
