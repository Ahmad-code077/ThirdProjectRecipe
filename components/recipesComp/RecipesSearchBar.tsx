import { RecipesSearchBarProps } from './RecipeCompTypes';

const RecipesSearchBar: React.FC<RecipesSearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className='my-8'>
      <div className='flex items-center'>
        <input
          type='text'
          id='search'
          placeholder='Search Recipe Here...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='px-6 py-3 sm:w-96 text-lg border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-in-out'
        />
      </div>
    </div>
  );
};

export default RecipesSearchBar;
