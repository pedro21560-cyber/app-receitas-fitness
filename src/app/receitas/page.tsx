"use client";

import { useState } from "react";
import { Search, Filter, Clock, Flame, Heart, Bookmark } from "lucide-react";
import Link from "next/link";

export default function ReceitasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["todas", "proteicas", "low-carb", "rápidas", "econômicas"];

  const recipes = [
    {
      id: "1",
      title: "Frango Grelhado com Legumes",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      category: "proteicas",
      prepTime: 25,
      calories: 350,
      author: "Chef Ana",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: 245,
      saved: false,
    },
    {
      id: "2",
      title: "Omelete de Claras com Espinafre",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=600&fit=crop",
      category: "low-carb",
      prepTime: 10,
      calories: 180,
      author: "Nutri João",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      likes: 189,
      saved: true,
    },
    {
      id: "3",
      title: "Bowl de Açaí Fitness",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop",
      category: "rápidas",
      prepTime: 5,
      calories: 280,
      author: "Fit Maria",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      likes: 312,
      saved: false,
    },
    {
      id: "4",
      title: "Salada de Atum com Grão de Bico",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
      category: "econômicas",
      prepTime: 15,
      calories: 320,
      author: "Chef Ana",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: 156,
      saved: false,
    },
    {
      id: "5",
      title: "Panqueca de Banana e Aveia",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&h=600&fit=crop",
      category: "rápidas",
      prepTime: 8,
      calories: 220,
      author: "Nutri João",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      likes: 278,
      saved: true,
    },
    {
      id: "6",
      title: "Wrap de Frango com Cream Cheese",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop",
      category: "proteicas",
      prepTime: 20,
      calories: 380,
      author: "Fit Maria",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      likes: 201,
      saved: false,
    },
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "todas" || recipe.category === selectedCategory;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 pt-8 pb-6 sticky top-0 z-40 shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Receitas Fitness</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar receitas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-white text-emerald-600 shadow-md"
                    : "bg-emerald-600/30 text-white hover:bg-emerald-600/50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Recipes Grid */}
      <div className="px-6 py-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-sm text-gray-600 mb-4">
            {filteredRecipes.length} receitas encontradas
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <Link href={`/receitas/${recipe.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className={`w-5 h-5 ${recipe.saved ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                    </button>
                  </div>
                </Link>
                
                <div className="p-4">
                  <Link href={`/receitas/${recipe.id}`}>
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {recipe.title}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{recipe.prepTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      <span>{recipe.calories} kcal</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <img
                        src={recipe.authorAvatar}
                        alt={recipe.author}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-sm text-gray-600">{recipe.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Heart className="w-4 h-4" />
                      <span>{recipe.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
