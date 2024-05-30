import React from "react";
import Header from "./components/Header";

export default function HomePage() {
	return (
		<>
			<Header />
			<div className="flex">
				<main className="p-8 flex-1">
					<h2 className="text-2xl mb-4">Welcome to Bookshelf</h2>
					{/* ...other content components */}
				</main>
			</div>
		</>
	);
}
