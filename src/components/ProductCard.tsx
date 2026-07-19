'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { IProduct } from '@/types';
import { cn, formatCurrency, calculateDiscount } from '@/lib/utils';
import { BADGE_LABELS } from '@/lib/constants';

interface ProductCardProps {
  product: IProduct;
  onAddToCart?: (productId: string) => void;
  onAddToFavorite?: (productId: string) => void;
  isFavorite?: boolean;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onAddToFavorite,
  isFavorite = false,
}: ProductCardProps) => {
  const discount = calculateDiscount(product.originalPrice || product.currentPrice, product.currentPrice);

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
          {product.image && (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2 right-2 bg-primary text-dark text-xs font-bold px-2 py-1 rounded">
              {BADGE_LABELS[product.badge]}
            </div>
          )}

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded">
              -{discount}%
            </div>
          )}

          {/* Heart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToFavorite?.(product.id);
            }}
            className={cn(
              'absolute bottom-2 right-2 p-2 rounded-full transition-colors',
              isFavorite
                ? 'bg-accent text-white'
                : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100'
            )}
          >
            <Heart className={cn('w-4 h-4', isFavorite && 'fill-current')} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-sm font-semibold text-dark dark:text-white line-clamp-2 mb-2">
            {product.title}
          </h3>

          {/* Store */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            {product.store.name}
          </p>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="flex items-center space-x-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3 h-3',
                      i < Math.round(product.rating)
                        ? 'fill-primary text-primary'
                        : 'text-gray-300'
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
          )}

          {/* Prices */}
          <div className="mb-4">
            <div className="flex items-baseline space-x-2">
              <span className="text-lg font-bold text-primary">
                {formatCurrency(product.currentPrice)}
              </span>
              {product.originalPrice && product.originalPrice > product.currentPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Shipping Info */}
          {product.shipping && (
            <p className="text-xs text-green-600 dark:text-green-400 mb-3">
              {product.shipping}
            </p>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart?.(product.id);
            }}
            className="w-full bg-primary text-dark py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2 mt-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Ver Oferta</span>
          </button>
        </div>
      </div>
    </Link>
  );
};
