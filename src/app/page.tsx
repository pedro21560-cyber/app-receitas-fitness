"use client";

import { Search, TrendingUp, Clock, Flame, Leaf, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Proteicas", icon: Flame, color: "from-orange-400 to-red-500", count: 120 },
    { name: "Low Carb", icon: Leaf, color: "from-emerald-400 to-green-600", count: 95 },
    { name: "Rápidas", icon: Zap, color: "from-yellow-400 to-orange-500", count: 150 },
    { name: "Econômicas", icon: Clock, color: "from-blue-400 to-cyan-500", count: 80 },
  ];

  const highlights = [
    {
      id: "1",
      title: "Frango Grelhado com Legumes",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      prepTime: 25,
      calories: 350,
      category: "Proteica"
    },
    {
      id: "2",
      title: "Omelete de Claras com Espinafre",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=600&fit=crop",
      prepTime: 10,
      calories: 180,
      category: "Low Carb"
    },
    {
      id: "3",
      title: "Bowl de Açaí Fitness",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop",
      prepTime: 5,
      calories: 280,
      category: "Rápida"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 pt-8 pb-6 rounded-b-3xl shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">FitChef 🥗</h1>
          <p className="text-emerald-100 text-sm">Receitas saudáveis para seu dia a dia</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-6 -mt-6 mb-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar receitas fitness..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="px-6 mb-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Categorias</h2>
            <Link href="/receitas" className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/receitas?category=${category.name.toLowerCase()}`}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105`}>
                    <Icon className="w-8 h-8 text-white mb-3" />
                    <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.count} receitas</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 mb-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-bold text-gray-800">Em Alta</h2>
          </div>
          <div className="space-y-4">
            {highlights.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/receitas/${recipe.id}`}
                className="block group"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {recipe.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        <span>{recipe.calories} kcal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Gerar Receita com IA */}
      <section className="px-6 mb-8">
        <div className="max-w-screen-xl mx-auto">
          <Link href="/gerar-receita">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">✨ Crie sua Receita com IA</h3>
                  <p className="text-white/90 text-sm">Use os ingredientes que você tem em casa</p>
                </div>
                <div className="bg-white/20 p-3 rounded-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
