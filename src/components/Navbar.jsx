import React from "react";
import $ from "jquery";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav>
			<div class="logo">Logo here</div>
			<div class="menu">
				<ul>
					<li>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<a href="#about" className="nav-link">
							About
						</a>
					</li>
					<li>
						<Link to="/member" className="nav-link">
							Members
						</Link>
					</li>
					<li>
						<Link to="/contact" className="nav-link">
							Contacts
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;

$(document).ready(function () {
	$(".menu-icon").on("click", function () {
		$("nav ul").toggleClass("showing");
	});
});

// Scrolling Effect

$(window).on("scroll", function () {
	if ($(window).scrollTop()) {
		$("nav").addClass("black");
	} else {
		$("nav").removeClass("black");
	}
});
