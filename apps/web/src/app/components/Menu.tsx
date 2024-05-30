import Link from "next/link";
import React from "react";

function Sidebar() {
	return (
		// inline menu
		<nav className="bg-gray-800 text-white">
			<ul className="flex space-x-4">
				<li>
					<Link href="/" className="text-white hover:text-gray-300">
						Home
					</Link>
				</li>
				<li>
					<Link href="/books/add" className="text-white hover:text-gray-300">
						Add Book
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
