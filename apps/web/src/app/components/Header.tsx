import React from "react";
import Menu from "./Menu";

function Header() {
	return (
		<header className="bg-gray-800 p-4 flex items-center justify-between">
			<h1 className="text-white text-2xl">Bookshelf</h1>
			<Menu />
		</header>
	);
}

export default Header;
