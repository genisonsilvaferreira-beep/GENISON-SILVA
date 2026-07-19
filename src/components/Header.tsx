'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-dark font-bold text-lg">GS</span>
            </div>
            <span className="font-bold text-lg text-dark dark:text-white hidden sm:inline">
              PROMOS DO GS
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar promoções..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/favorites"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition hidden sm:block"
            >
              <Heart className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar promoções..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};
