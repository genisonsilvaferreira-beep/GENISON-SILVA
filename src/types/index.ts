// User Types
export type UserRole = 'USER' | 'EDITOR' | 'ADMIN';

export interface IUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role: UserRole;
  isEmailVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Category Types
export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  image?: string;
  color?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Store Types
export interface IStore {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  banner?: string;
  website?: string;
  color?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Product Types
export type Badge = 'NEW' | 'HOT' | 'EXCLUSIVE' | 'BEST_PRICE' | 'BOT_CHOICE' | 'FEATURED' | 'SHIPPING_FREE';

export interface IProduct {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
  gallery?: string[];
  currentPrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  url: string;
  rating: number;
  reviews: number;
  shipping?: string;
  badge: Badge;
  isActive: boolean;
  isFeatured: boolean;
  views: number;
  clicks: number;
  favorites: number;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  category: ICategory;
  store: IStore;
}

// Coupon Types
export type DiscountType = 'PERCENTAGE' | 'FIXED';

export interface ICoupon {
  id: string;
  code: string;
  description?: string;
  discountType: DiscountType;
  discountValue: number;
  maxUses?: number;
  currentUses: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
  store: IStore;
}

// Favorite Types
export interface IFavorite {
  id: string;
  userId: string;
  productId: string;
  product: IProduct;
  createdAt: Date;
}

// Click Types
export interface IClick {
  id: string;
  productId: string;
  userId?: string;
  createdAt: Date;
}

// Banner Types
export interface IBanner {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  position: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;
}

// Campaign Types
export interface ICampaign {
  id: string;
  name: string;
  slug: string;
  description?: string;
  banner?: string;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface IApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface IPaginatedResponse<T> {
  success: boolean;
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  pages: number;
}

// Auth Types
export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
