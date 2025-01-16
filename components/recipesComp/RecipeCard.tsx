import Image from 'next/image';
import { Recipe } from './RecipeCompTypes';
import Link from 'next/link';

type RecipeCardProps = {
  recipe: Recipe;
};

// RecipeCard Component
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div
      key={recipe.id}
      className='w-full max-w-lg  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300'
    >
      {/* Image Section */}
      <div className='relative'>
        <Image
          className='w-full h-64 object-cover'
          src={recipe.image}
          alt={recipe.title}
          unoptimized
          width={500}
          height={300}
        />
        <div className='absolute top-4 right-4 bg-gradient-to-r from-red-500  text-white bg-black px-4 py-1 rounded-lg text-sm font-medium'>
          Featured
        </div>
      </div>

      {/* Content Section */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-3'>{recipe.title}</h3>
        <p className='text-gray-600 text-sm mb-4'>
          {recipe.ingredients.slice(0, 3).join(', ')}{' '}
          {recipe.ingredients.length > 3 && '...'}
        </p>

        {/* Button */}
        <Link
          href={`/single/${recipe.id}`}
          className='block text-center bg-secondary text-white py-2 rounded-full font-medium hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-400 transition-all duration-300'
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
