import UpdateRecipePopup from './UpdateRecipePopup';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';
import Image from 'next/image';

interface Recipe {
  id: number | string;
  title: string;
  image: string;
  ingredients: string;
  instructions: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  refreshRecipes: () => void;
}

const RecipeList = ({ recipes, refreshRecipes }: RecipeListProps) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className='py-6'>
      <h2 className='text-2xl font-bold  mb-6'>All Recipes</h2>
      {recipes.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className='bg-secondary text-white'>
                <th className='px-4 py-2 text-left text-foreground'>Image</th>
                <th className='px-4 py-2 text-left text-foreground'>Title</th>
                <th className='px-4 py-2 text-left text-foreground'>
                  Ingredients
                </th>
                <th className='px-4 py-2 text-left text-foreground'>
                  Instructions
                </th>
                <th className='px-4 py-2 text-left text-foreground'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.id} className='border-b border-border'>
                  <td className='px-4 py-2'>
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      width={50}
                      height={50}
                      className='rounded-full'
                      unoptimized
                    />
                  </td>
                  <td className='px-4 py-2'>{recipe.title}</td>
                  <td className='px-4 py-2'>{recipe.ingredients}</td>
                  <td className='px-4 py-2'>{recipe.instructions}</td>
                  <td className='px-4 py-2 flex gap-2'>
                    <button
                      onClick={() => setSelectedRecipe(recipe)}
                      className='px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2 transition-all'
                    >
                      Update
                    </button>
                    <DeleteRecipeButton
                      recipeId={recipe.id}
                      refreshRecipes={refreshRecipes}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className='text-gray-600 text-center'>No recipes available.</p>
      )}

      {selectedRecipe && (
        <UpdateRecipePopup
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          refreshRecipes={refreshRecipes}
        />
      )}
    </div>
  );
};

export default RecipeList;
