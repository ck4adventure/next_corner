
import { getCategories } from "@/app/lib/data";
import { RecipeForm } from "../../ui/headerbar/recipes/recipe_form";


export default async function Page() {
  const categoryRows = await getCategories();
  
  return (
    <div>
      <title>Add Recipe</title>
      <main>
				<RecipeForm categoryRows={categoryRows} />
      </main>
    </div>
  );
}