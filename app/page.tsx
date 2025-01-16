import HeroSection from '@/components/HeroSection';
import Recipies from '@/components/recipesComp/Recipes';
import WhatWeOffer from '@/components/WhatWeOffer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeOffer />
      <h1 className='text-center text-secondary text-2xl font-bold sm:text-4xl'>
        Search Your favourite Recipie here{' '}
      </h1>
      <Recipies />
    </div>
  );
};
export default Home;
