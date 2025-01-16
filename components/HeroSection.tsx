'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#eecaaf] to-[#e4e48c] px-6 lg:px-20 text-center'>
      {/* Text Content */}
      <h1 className='text-5xl lg:text-6xl font-extrabold leading-snug text-gray-800 mb-6'>
        Unlock{' '}
        <span className='bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text'>
          Culinary Secrets
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
          <button className='px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
            Explore Recipes
          </button>
        </Link>
        <Link href='/contact' passHref>
          <button className='px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-orange-500 hover:text-white'>
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
