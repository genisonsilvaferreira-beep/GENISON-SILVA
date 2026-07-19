'use client';

import { useState, useCallback } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '@/lib/constants';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFavorite = useCallback((productId: string) => {
    return favorites.includes(productId);
  }, [favorites]);

  const addFavorite = useCallback(async (productId: string) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_ENDPOINTS.FAVORITES}/add`, {
        productId,
      });
      setFavorites((prev) => [...prev, productId]);
      return response.data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeFavorite = useCallback(async (productId: string) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_ENDPOINTS.FAVORITES}/remove`, {
        productId,
      });
      setFavorites((prev) => prev.filter((id) => id !== productId));
      return response.data;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const toggleFavorite = useCallback(
    async (productId: string) => {
      if (isFavorite(productId)) {
        return removeFavorite(productId);
      } else {
        return addFavorite(productId);
      }
    },
    [isFavorite, addFavorite, removeFavorite]
  );

  return {
    favorites,
    loading,
    error,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
};
