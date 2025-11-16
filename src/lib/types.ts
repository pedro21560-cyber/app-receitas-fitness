// Tipos do FitChef

export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: 'proteica' | 'low-carb' | 'rapida' | 'economica';
  prepTime: number; // minutos
  calories: number;
  ingredients: string[];
  steps: string[];
  author: string;
  authorAvatar: string;
  likes: number;
  saved: boolean;
}

export interface Post {
  id: string;
  author: string;
  authorAvatar: string;
  image?: string;
  video?: string;
  title: string;
  description: string;
  hashtags: string[];
  likes: number;
  comments: number;
  timestamp: string;
  recipe?: Recipe;
}

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  recipesCount: number;
  followersCount: number;
  followingCount: number;
}

export interface GeneratedRecipe {
  name: string;
  image: string;
  prepTime: number;
  calories: number;
  ingredients: string[];
  steps: string[];
}
