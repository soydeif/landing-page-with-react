import React from "react";

//include images into your bundle

import { Navbar } from "./menu";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			<Cards></Cards>
			<Footer></Footer>
		</div>
	);
}
