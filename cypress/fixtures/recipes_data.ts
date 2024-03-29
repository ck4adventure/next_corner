type RecipeData = {
  [key: string]: {title: string, slug: string, id: number}[];
};

export const recipes_data: RecipeData = {
	"breakfast": [{
			"title": "Egg McMuffin",
			"slug": "egg-mcmuffin",
			"id": 1
		},
		{
			"title": "Pancakes",
			"slug": "pancakes",
			"id": 2
		}
	],
	"main": [{
			"title": "Big Mac",
			"slug": "big-mac",
			"id": 3
		},
		{
			"title": "Quarter Pounder",
			"slug": "quarter-pounder",
			"id": 4
		}
	]
}