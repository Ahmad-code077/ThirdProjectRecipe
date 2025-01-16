'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#eecaaf] to-[#e4e48c] px-6 lg:px-20 text-center'>
      {/* Text Content */}
      <h1 className='text-5xl lg:text-6xl font-extrabold leading-snug text-gray-800 mb-6'>
        Unlock{' '}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
          FlavorBox Secrets
        </span>
      </h1>
      <p className='text-lg lg:text-xl text-gray-700 mb-8'>
        Discover a world of recipes that turn everyday meals into extraordinary
        experiences. Let’s create something delicious! From quick and easy meals
        for busy weeknights to gourmet dishes for special occasions, our curated
        collection of recipes has something for everyone.
      </p>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <Link href='/allrecipes' passHref>
          <button className='px-8 py-3  bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl '>
            Explore Recipes
          </button>
        </Link>
        <Link href='/contact' passHref>
          <button className='px-8 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-secondary hover:text-white hover:border-secondary'>
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
