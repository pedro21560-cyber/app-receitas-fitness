"use client";

import { Settings, Grid, Bookmark, Heart, ChefHat } from "lucide-react";
import { useState } from "react";

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<"posts" | "saved" | "liked">("posts");

  const user = {
    name: "Ana Silva",
    username: "@ana_fitchef",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bio: "Apaixonada por culinária fitness 🥗 | Nutricionista | Compartilhando receitas saudáveis",
    recipesCount: 24,
    followersCount: 1234,
    followingCount: 567,
  };

  const userPosts = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
      likes: 234,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
      likes: 412,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop",
      likes: 567,
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop",
      likes: 189,
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=400&fit=crop",
      likes: 278,
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop",
      likes: 201,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 pt-8 pb-20 relative">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Perfil</h1>
          <button className="hover:bg-white/20 p-2 rounded-lg transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          {/* Avatar e Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-emerald-600 font-medium mb-2">{user.username}</p>
              <p className="text-gray-600 text-sm">{user.bio}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-gray-800">{user.recipesCount}</p>
              <p className="text-sm text-gray-600">Receitas</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-gray-800">{user.followersCount}</p>
              <p className="text-sm text-gray-600">Seguidores</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-gray-800">{user.followingCount}</p>
              <p className="text-sm text-gray-600">Seguindo</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Editar Perfil
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all">
              Compartilhar
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${
                activeTab === "posts"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Grid className="w-5 h-5" />
              <span>Posts</span>
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${
                activeTab === "saved"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Bookmark className="w-5 h-5" />
              <span>Salvos</span>
            </button>
            <button
              onClick={() => setActiveTab("liked")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 font-medium transition-colors ${
                activeTab === "liked"
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Curtidos</span>
            </button>
          </div>

          {/* Grid de Posts */}
          <div className="grid grid-cols-3 gap-1 p-1">
            {userPosts.map((post) => (
              <div key={post.id} className="relative aspect-square group cursor-pointer">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-bold">{post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeTab === "posts" && userPosts.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Nenhuma receita postada ainda</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
