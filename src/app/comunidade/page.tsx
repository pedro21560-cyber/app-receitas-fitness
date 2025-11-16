"use client";

import { useState } from "react";
import { Heart, MessageCircle, Bookmark, MoreVertical, Send } from "lucide-react";

export default function ComunidadePage() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      author: "Chef Ana",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      timestamp: "2h atrás",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
      title: "Salada Fitness Completa 🥗",
      description: "Minha salada favorita para o almoço! Super nutritiva e deliciosa.",
      hashtags: ["#fitness", "#salada", "#saudavel"],
      likes: 234,
      comments: 18,
      liked: false,
      saved: false,
    },
    {
      id: "2",
      author: "Nutri João",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      timestamp: "5h atrás",
      image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&h=600&fit=crop",
      title: "Frango Grelhado Perfeito 🍗",
      description: "Dica: marine por 2h para ficar super macio! Receita completa no meu perfil.",
      hashtags: ["#proteina", "#frango", "#dica"],
      likes: 412,
      comments: 32,
      liked: true,
      saved: false,
    },
    {
      id: "3",
      author: "Fit Maria",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      timestamp: "1d atrás",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=600&fit=crop",
      title: "Bowl de Açaí Fitness 🍓",
      description: "Meu pré-treino favorito! Energia pura e saudável.",
      hashtags: ["#acai", "#pretreino", "#energia"],
      likes: 567,
      comments: 45,
      liked: false,
      saved: true,
    },
  ]);

  const toggleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const toggleSave = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, saved: !post.saved }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 pt-8 pb-6 sticky top-0 z-40 shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold">Comunidade FitChef</h1>
          <p className="text-emerald-100 text-sm mt-1">Compartilhe suas receitas e inspire outros</p>
        </div>
      </header>

      {/* Feed */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
              {/* Header do Post */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Imagem */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Ações */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-2 hover:scale-110 transition-transform"
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          post.liked ? "fill-red-500 text-red-500" : "text-gray-700"
                        }`}
                      />
                      <span className="font-bold text-gray-800">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-gray-700" />
                      <span className="font-bold text-gray-800">{post.comments}</span>
                    </button>
                  </div>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className="hover:scale-110 transition-transform"
                  >
                    <Bookmark
                      className={`w-6 h-6 ${
                        post.saved ? "fill-emerald-500 text-emerald-500" : "text-gray-700"
                      }`}
                    />
                  </button>
                </div>

                {/* Conteúdo */}
                <div className="mb-2">
                  <h3 className="font-bold text-gray-800 mb-1">{post.title}</h3>
                  <p className="text-gray-700 text-sm">{post.description}</p>
                </div>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.hashtags.map((tag) => (
                    <span key={tag} className="text-emerald-600 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Comentários */}
                <button className="text-sm text-gray-500 hover:text-gray-700">
                  Ver todos os {post.comments} comentários
                </button>

                {/* Input de Comentário */}
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                  <input
                    type="text"
                    placeholder="Adicione um comentário..."
                    className="flex-1 text-sm focus:outline-none"
                  />
                  <button className="text-emerald-600 font-bold text-sm hover:text-emerald-700">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
