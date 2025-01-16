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
      className='w-full max-w-md p-6 bg-gradient-to-r from-[#eac9b1] to-[#e4e48c]  rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105'
    >
      {/* Image Section */}
      <div className='w-full mb-6'>
        <Image
          className='w-full h-56 object-cover rounded-xl'
          src={recipe.image}
          alt={recipe.title}
          priority
          width={500}
          height={300}
        />
      </div>

      {/* Content Section */}
      <div className='flex flex-col items-center'>
        <div className='bg-gradient-to-r from-[#ff5f5f] to-[#ff3d3d] text-white text-lg font-semibold rounded-lg px-4 py-2 mb-4'>
          {recipe.title}
        </div>
        <p className='text-gray-700 text-sm mb-6 text-center'>
          {recipe.ingredients.slice(0, 3).join(', ')}{' '}
          {recipe.ingredients.length > 3 && '...'}
        </p>
        <Link
          href={`/single/${recipe.id}`}
          className='inline-block px-6 py-2 text-white bg-[#ff5f5f] border-2 border-[#ff5f5f] font-semibold rounded-full hover:bg-white hover:text-[#ff5f5f] transition-all duration-300'
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
