"use client"; // Enable client-side components and fetching

import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { set, z } from "zod";

const bookSchema = z.object({
	title: z.string().trim().min(1, { message: "Title is required" }),
	author: z.string().min(1, { message: "Author is required" }),
	publication_date: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Invalid date format" }),
});

export default function AddBookPage() {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		publication_date: "",
	});
	const [similarBooks, setSimilarBooks] = useState([]);
	const [errors, setErrors] = useState<z.ZodIssue[]>([]);
	const [apiErrors, setApiErrors] = useState<string[]>([]);
	const [submitStatus, setSubmitStatus] = useState<string>("idle");

	// Fetch similar books
	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			const term = formData.title.trim();
			if (!term) {
				setSimilarBooks([]);
				return;
			}
			fetch(`http://localhost:4000/books/search?term=${term}`)
				.then((res) => res.json())
				.then(setSimilarBooks);
		}, 300); // Debounce 300ms

		return () => clearTimeout(delayDebounceFn); // Cleanup
	}, [formData]);

	// Handle form changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitStatus("idle");
		const validationResult = await bookSchema.safeParseAsync(formData);
		if (!validationResult.success) {
			setErrors(validationResult.error.issues);
			return;
		}

		try {
			setSubmitStatus("pending");
			setErrors([]);
			setApiErrors([]);
			const res = await fetch("http://localhost:4000/books", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: { "Content-Type": "application/json" },
			});

			if (!res.ok) {
				const errorData = await res.json();
				setSubmitStatus("error");
				setErrors(errorData.errors); // Handle API validation errors
				setApiErrors(errorData.errors.map((err: any) => err.msg));
			} else {
				setSubmitStatus("success");
				setFormData({ title: "", author: "", publication_date: "" });
				setErrors([]);
				setApiErrors([]);
			}
		} catch (error) {
			setSubmitStatus("error");
			setApiErrors(["An error occurred. Please try again."]);
		}
	};

	return (
		<>
			<Header />
			<div className="p-8"></div>
			<div className="container mx-auto max-w-xl p-8 bg-white rounded shadow-md">
				<h2 className="text-2xl font-semibold mb-4">Add New Book</h2>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="title" className="block text-gray-700">
							Title <span className="text-sm text-red-500">*</span>
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={formData.title}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
						{errors.find((err) => err.path.includes("title")) && (
							<p className="text-red-500">
								{errors.find((err) => err.path.includes("title"))?.message}
							</p>
						)}
						{similarBooks.length > 0 && (
							<ul className="list-none">
								<small>Similar books: </small>
								{similarBooks.map((book: any) => (
									<li key={book._id}>{book.title}</li>
								))}
							</ul>
						)}
					</div>

					<div>
						<label htmlFor="author" className="block text-gray-700">
							Author <span className="text-sm text-red-500">*</span>
						</label>
						<input
							type="text"
							id="author"
							name="author"
							value={formData.author}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
						{errors.find((err) => err.path.includes("author")) && (
							<p className="text-red-500">
								{errors.find((err) => err.path.includes("author"))?.message}
							</p>
						)}
					</div>

					<div>
						<label htmlFor="publication_date" className="block text-gray-700">
							Publication Date <span className="text-sm text-red-500">*</span>
						</label>
						<input
							type="date"
							id="publication_date"
							name="publication_date"
							value={formData.publication_date}
							onChange={handleChange}
							className="w-full p-2 border rounded"
						/>
						{errors.find(
							(err) => err && err.path.includes("publication_date"),
						) && (
							<p className="text-red-500">
								{
									errors.find((err) => err.path.includes("publication_date"))
										?.message
								}
							</p>
						)}
					</div>
					{apiErrors.length > 0 && (
						<div className="bg-red-100 text-red-500 p-2 rounded">
							{apiErrors.map((error) => (
								<p key={error}>{error}</p>
							))}
						</div>
					)}
					{submitStatus === "success" && (
						<div className="bg-green-100 text-green-500 p-2 rounded">
							<p>Book added successfully!</p>
						</div>
					)}
					{/* pending show loading... */}
					{submitStatus === "pending" && (
						<div className="bg-blue-100 text-blue-500 p-2 rounded">
							<p>Loading...</p>
						</div>
					)}
					<button
						disabled={submitStatus === "pending"}
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded"
					>
						Add Book
					</button>
				</form>
			</div>
		</>
	);
}
