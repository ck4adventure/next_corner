// RecipeForm is a client component that displays a form
// with a recipe title input and a select dropdown to choose a category
// it should manage the state and submit the form
'use client'
import { createRecipeWithCategory } from "@/app/lib/actions";
import { useState } from "react";

export const RecipeForm = ({ categoryRows }: { categoryRows: any }) => {
	const [recipeTitle, setRecipeTitle] = useState<string>('');
	const [categoryID, setCategoryID] = useState<number>(0);
	console.log(categoryID)
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await createRecipeWithCategory(recipeTitle, categoryID);
		console.log("Form submitted");
	};

	return (
		<div>
			<h1 className="m-4">Add Recipe</h1>
			<form data-cy='recipe-form' className="m-4 flex flex-col" onSubmit={handleSubmit}>
				{/* Recipe Title */}
				<label htmlFor="recipe-title">Recipe Title
					<input
						id="recipe-title"
						className="border-b border-slate-300"
						onChange={e => setRecipeTitle(e.target.value)}
						value={recipeTitle}>
					</input>
				</label>
				{/* Category Select */}
				<label htmlFor="category-select">Category
					<select id="category-select" onChange={e => setCategoryID(parseInt(e.target.value))}>
						{categoryRows.map((row: any) => (
							<option
								key={row.category_id}
								value={row.category_id}>
								{row.category_name}
							</option>))}
					</select>
				</label>
				{/* Submit button */}
				<button type="submit" className="m-4">Create Recipe</button>
			</form>
		</div>
	);
}