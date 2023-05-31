import React from "react";

import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Card from "./Card.jsx"

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Carousel />
			<Card />
		</div>
	);
};

export default Home;
