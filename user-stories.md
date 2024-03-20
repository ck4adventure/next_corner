# User Stories

## Recipes

### Recipes Index Page
Story: As a user, I want to see all of my available recipes.
FE: create RecipeIndexPage with a heading and list all recipes by title
Action: get all recipe titles
BE: create recipes table with id and title required (no unique)

### Recipe Categories
Story: As a user, I want to see my recipes grouped by category.
FE: add category cards to main index page
FE: add individual category pages to view the entire list
Action: get recipes and categories
BE: add categories table
BE: add recipe_categories joins table

### Add a Recipe
Story: As a user, I want to be able to add a recipe
FE: create AddRecipePage with title input and category
Action: createRecipeWithCategory

### View a Recipe
Story: As a user, I want to be able to view my recipe
FE: create RecipeDetailPage
Action: getRecipeByID

### Recipe Links are Slugs not IDs
Story: As a user, I want to see the recipe title in the URL
FE: change links to use slugs
Action: getRecipeBySlug
BE: add col slug to recipes table, unique
BE: add function to slugify a recipe title