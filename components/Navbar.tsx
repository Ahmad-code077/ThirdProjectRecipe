'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { Menu, UserRound } from 'lucide-react';

const data = [
  { id: 4, link: '/', title: 'Home' },
  { id: 1, link: '/allrecipes', title: 'Recipes' },
  { id: 2, link: '/about', title: 'About' },
  { id: 3, link: '/contact', title: 'Contact' },
];

interface User {
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const syncUserFromStorage = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    syncUserFromStorage(); // Initial check

    // Listen to the storage event
    window.addEventListener('storage', syncUserFromStorage);
    return () => {
      window.removeEventListener('storage', syncUserFromStorage);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);

    // Trigger a localStorage event manually
    window.dispatchEvent(new Event('storage'));
  };
  const safeData = Array.isArray(data) ? data : [];

  return (
    <nav className='  sticky top-0 left-0 w-full z-50 shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <Link
              href='/'
              className='text-2xl font-extrabold  hover:text-primary transition-all duration-300'
            >
              FlavorBox
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-x-8 font-semibold'>
            {safeData.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className='hover:text-primary hover:underline hover:scale-105 transition-transform duration-300'
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* User and Mobile Menu */}
          <div className='flex items-center gap-4'>
            {user?.email === 'admin@gmail.com' && (
              <Link
                href={'/admin'}
                className='hover:text-primary  transition-all'
              >
                Dashboard
              </Link>
            )}
            {!user ? (
              <div>
                <Link href={'/login'} className='hover:text-primary'>
                  Login
                </Link>
              </div>
            ) : (
              <div className='relative'>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className='flex items-center gap-2 w-9 h-9 rounded-full border-2 border-bisque hover:border-secondary transition-all   justify-center'
                >
                  <UserRound />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className='absolute right-0 mt-2 w-48   border border-bisque rounded-lg shadow-lg '>
                    <button
                      onClick={handleLogout}
                      className='bg-gray-300 w-full text-left px-4 py-2 hover:bg-primary hover:text-white transition-all rounded-lg'
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger>
                <Menu className='md:hidden text-2xl ' />
              </SheetTrigger>
              <SheetContent className='  p-4 '>
                <SheetHeader>
                  <SheetTitle>
                    <Link className=' font-extrabold' href={'/'}>
                      FlavorBox
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col mt-10 font-bold'>
                  {safeData.map((item) => (
                    <Link
                      href={item.link}
                      key={item.id}
                      className='hover:text-primary border-b-2 py-4 transition-all duration-300'
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
