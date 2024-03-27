'use client';
import Link from 'next/link';

// CategoryCard takes a category and array of recipes and displays them in a list
const CategoryCard = ({ category, categoryRecipes }: { category: string, categoryRecipes?: any }) => {
	const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
	console.log('category recipes: ',categoryRecipes);
	return (
		<div data-cy='category-card' className="m-4 border-2 rounded-md p-2 w-56 min-h-16">
			<h2 data-cy='category-name' className="font-bold">{formattedCategory}</h2>
			<ul data-cy='recipe-list'>
				{categoryRecipes.map((recipe: any, index: number) => {
					return (
						<li key={index} className="font-light m-2">
							<Link
								data-cy='recipe-link'
								href={`/recipes/${encodeURI(recipe.recipe_slug)}`}
							>
								{recipe.recipe_title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);

}

export default CategoryCard;