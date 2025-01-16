import { Pizza, IceCream, HandPlatter } from 'lucide-react';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <Pizza className='text-5xl text-secondary' />,
      title: 'Quick & Easy Meals',
      description:
        'Save time with our quick and easy meal recipes that are both delicious and simple to make.',
    },
    {
      icon: <HandPlatter className='text-5xl text-secondary' />,
      title: 'Healthy Options',
      description:
        'Explore a variety of nutritious and balanced recipes tailored for a healthy lifestyle.',
    },
    {
      icon: <IceCream className='text-5xl text-secondary' />,
      title: 'Seasonal Favorites',
      description:
        'Delight in recipes featuring the freshest seasonal ingredients and vibrant flavors.',
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto text-center'>
        {/* Section Heading */}
        <h2 className='text-4xl font-extrabold mb-6 text-gray-800'>
          What We Offer
        </h2>
        <p className='text-lg text-gray-700 mb-12 max-w-2xl mx-auto'>
          Discover an assortment of recipes crafted to inspire creativity in
          your kitchen.
        </p>
        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {offerings.map((offer, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-[#eac9b1] to-[#e4e48c] rounded-xl shadow-md p-8 transition-transform transform hover:scale-[1.020] hover:shadow-lg'
            >
              <div className='flex justify-center items-center mb-6'>
                {offer.icon}
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
                {offer.title}
              </h3>
              <p className='text-md text-gray-700'>{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
