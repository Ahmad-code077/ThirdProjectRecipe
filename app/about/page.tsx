'use client';

import { Users, Award, Smile, Heart, Globe, Star } from 'lucide-react';

const aboutDetails = [
  {
    icon: <Users className='text-4xl text-primary' />,
    title: 'Our Team',
    description:
      'Our team consists of passionate chefs, food enthusiasts, and creative minds dedicated to delivering exceptional recipes and experiences.',
  },
  {
    icon: <Award className='text-4xl text-primary' />,
    title: 'Our Mission',
    description:
      'To bring a variety of flavors from around the world to your kitchen while making cooking easy and enjoyable for everyone.',
  },
  {
    icon: <Smile className='text-4xl text-primary' />,
    title: 'Our Promise',
    description:
      'We promise to provide fresh, inspiring, and delicious recipes that will bring joy to your meals and family gatherings.',
  },
];

const values = [
  {
    icon: <Heart className='text-4xl text-secondary' />,
    title: 'Passion for Flavor',
    description:
      'We love exploring unique tastes and bringing them to life in ways that excite your taste buds.',
  },
  {
    icon: <Globe className='text-4xl text-secondary' />,
    title: 'Global Inspiration',
    description:
      'From traditional cuisines to modern fusion, we draw inspiration from all over the world.',
  },
  {
    icon: <Star className='text-4xl text-secondary' />,
    title: 'Excellence Guaranteed',
    description:
      'Our recipes are carefully curated to ensure the highest quality and satisfaction.',
  },
];

const testimonials = [
  {
    name: 'Emily Roberts',
    feedback:
      'Flavour Box has completely transformed my cooking experience. The recipes are easy to follow and incredibly delicious!',
  },
  {
    name: 'James Carter',
    feedback:
      'I love how Flavour Box offers a wide variety of recipes. There’s always something new and exciting to try.',
  },
];

const AboutPage = () => {
  return (
    <section className='min-h-screen py-16 '>
      <div className='container mx-auto px-6 lg:px-20 text-center'>
        {/* Heading Section */}
        <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>
          About{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Flavour Box
          </span>
        </h1>
        <p className='text-lg lg:text-xl mb-12 max-w-3xl mx-auto'>
          At Flavour Box, we are committed to bringing the joy of cooking and
          exploration into every home. From traditional recipes to modern
          favorites, we aim to inspire creativity and delight.
        </p>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {aboutDetails.map((detail, index) => (
            <div
              key={index}
              className='bg-white border border-primary rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
            >
              <div className='flex justify-center items-center mb-6'>
                {detail.icon}
              </div>
              <h3 className='text-xl font-semibold text-primary mb-4'>
                {detail.title}
              </h3>
              <p className='text-gray-600'>{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-extrabold mb-6'>Our Values</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='  rounded-xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
              >
                <div className='flex justify-center items-center mb-6'>
                  {value.icon}
                </div>
                <h3 className='text-xl font-semibold mb-4'>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-extrabold mb-6'>What Our Users Say</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='bg-white border border-primary rounded-xl shadow-lg p-8 text-left hover:shadow-2xl transform hover:scale-105 transition-all duration-300'
              >
                <p className='text-gray-700 mb-4'>
                  &quot;{testimonial.feedback}&quot;
                </p>
                <h4 className='font-semibold text-primary'>
                  - {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
