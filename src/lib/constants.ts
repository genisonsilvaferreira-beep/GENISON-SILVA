// Colors
export const COLORS = {
  PRIMARY: '#FFC107',
  SECONDARY: '#111111',
  WHITE: '#FFFFFF',
  ACCENT: '#ff4444',
  DARK_BG: '#0f0f0f',
  LIGHT_BG: '#fafaf8',
};

// Badge Labels
export const BADGE_LABELS: Record<string, string> = {
  NEW: '🆕 Novo',
  HOT: '🔥 Oferta em Destaque',
  EXCLUSIVE: '⭐ Exclusivo',
  BEST_PRICE: '💰 Melhor Preço',
  BOT_CHOICE: '🤖 Escolha do Bot',
  FEATURED: '💎 Em Destaque',
  SHIPPING_FREE: '🚚 Frete Grátis',
};

// Pagination
export const ITEMS_PER_PAGE = 20;
export const ITEMS_PER_PAGE_MOBILE = 10;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  PRODUCTS: '/api/products',
  CATEGORIES: '/api/categories',
  STORES: '/api/stores',
  COUPONS: '/api/coupons',
  FAVORITES: '/api/favorites',
  CLICKS: '/api/clicks',
  BANNERS: '/api/banners',
  SEARCH: '/api/search',
};

// Storage Keys
export const STORAGE_KEYS = {
  USER: 'promos_user',
  TOKEN: 'promos_token',
  THEME: 'promos_theme',
  FAVORITES: 'promos_favorites',
};
