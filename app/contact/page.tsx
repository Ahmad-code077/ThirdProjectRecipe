'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // Import icons from lucide-react
import { useShowToast } from '@/components/Toasts/DestructiveToast';

const Contact: React.FC = () => {
  const showToast = useShowToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for handling form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Data for the contact cards
  const contactDetails = [
    {
      id: 1,
      icon: <Phone size={32} className='text-primary' />,
      title: 'Phone',
      description: '+92-347384387',
    },
    {
      id: 2,
      icon: <Mail size={32} className='text-primary' />,
      title: 'Email',
      description: 'flavourbox@gmail.com',
    },
    {
      id: 3,
      icon: <MapPin size={32} className='text-primary' />,
      title: 'Location',
      description: 'Bahawalpur, Pakistan',
    },
  ];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);

      console.log('Form data submitted:', formData);

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      showToast({
        title: 'Message Sent!',
        description:
          'We have received your message and will get back to you soon.',
        variant: 'default',
      });

      setIsSubmitting(false);
    } else {
      showToast({
        title: 'Missing Information',
        description: 'Please fill in all the fields before submitting.',
        variant: 'destructive',
      });
    }
  };

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='py-16 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800'>
      {/* Page Header */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-extrabold text-gray-900 dark:text-white'>
          Let’s Connect with{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Flavour Box
          </span>
        </h1>
        <p className='text-lg mt-4 text-gray-600 dark:text-gray-300'>
          Have a question or want to collaborate? Drop us a message, and
          we&apos;ll get back to you shortly.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='w-full lg:w-1/2 grid grid-cols-1 gap-8'>
          {contactDetails.map((detail) => (
            <div
              key={detail.id}
              className='flex items-center gap-4 bg-white dark:bg-gray-800 border border-primary rounded-lg shadow-md p-6 hover:shadow-lg transition-all'
            >
              <div className='p-4 bg-primary/10 rounded-full'>
                {detail.icon}
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  {detail.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className='w-full lg:w-1/2 bg-white dark:bg-gray-800 border border-secondary rounded-lg shadow-lg p-8'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2'
              >
                Your Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2'
              >
                Your Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className='w-full px-4 py-3 border rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary'
              ></textarea>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-secondary'
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
