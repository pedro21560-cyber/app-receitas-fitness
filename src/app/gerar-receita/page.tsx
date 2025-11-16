"use client";

import { useState } from "react";
import { Sparkles, Plus, X, Clock, Flame, ChefHat, Loader2, Bookmark } from "lucide-react";

export default function GerarReceitaPage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<any>(null);

  const commonIngredients = [
    "Frango", "Ovo", "Banana", "Arroz", "Aveia", "Batata Doce",
    "Brócolis", "Atum", "Queijo Cottage", "Iogurte", "Espinafre", "Tomate"
  ];

  const addIngredient = (ingredient: string) => {
    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients([...ingredients, ingredient]);
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const generateRecipe = async () => {
    if (ingredients.length < 2) {
      alert("Adicione pelo menos 2 ingredientes!");
      return;
    }

    setIsGenerating(true);
    
    // Simulação de chamada à IA (substituir por API real)
    setTimeout(() => {
      setGeneratedRecipe({
        name: "Bowl Fitness de " + ingredients.slice(0, 2).join(" e "),
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        prepTime: 15,
        calories: 380,
        ingredients: [
          ...ingredients.map(ing => `${Math.floor(Math.random() * 200 + 50)}g de ${ing}`),
          "Sal e pimenta a gosto",
          "Azeite de oliva"
        ],
        steps: [
          "Prepare todos os ingredientes, lavando e cortando conforme necessário.",
          `Cozinhe ${ingredients[0]} em fogo médio por 10 minutos.`,
          `Adicione ${ingredients[1]} e tempere com sal e pimenta.`,
          "Misture bem todos os ingredientes.",
          "Sirva quente e aproveite sua refeição fitness!",
        ],
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 pt-8 pb-6 rounded-b-3xl shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Gerar Receita com IA</h1>
          </div>
          <p className="text-purple-100 text-sm">Use os ingredientes que você tem em casa</p>
        </div>
      </header>

      <div className="px-6 py-6">
        <div className="max-w-2xl mx-auto">
          {!generatedRecipe ? (
            <>
              {/* Input de Ingredientes */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Seus Ingredientes</h2>
                
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Digite um ingrediente..."
                    value={currentIngredient}
                    onChange={(e) => setCurrentIngredient(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addIngredient(currentIngredient)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => addIngredient(currentIngredient)}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Ingredientes Adicionados */}
                {ingredients.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ingredients.map((ingredient) => (
                      <div
                        key={ingredient}
                        className="flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full"
                      >
                        <span className="font-medium">{ingredient}</span>
                        <button
                          onClick={() => removeIngredient(ingredient)}
                          className="hover:bg-purple-200 rounded-full p-1 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ingredientes Comuns */}
                <div>
                  <p className="text-sm text-gray-600 mb-3">Ingredientes comuns:</p>
                  <div className="flex flex-wrap gap-2">
                    {commonIngredients.map((ingredient) => (
                      <button
                        key={ingredient}
                        onClick={() => addIngredient(ingredient)}
                        disabled={ingredients.includes(ingredient)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          ingredients.includes(ingredient)
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                        }`}
                      >
                        {ingredient}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botão Gerar */}
              <button
                onClick={generateRecipe}
                disabled={ingredients.length < 2 || isGenerating}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Gerando sua receita...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-6 h-6" />
                    Gerar Receita com IA
                  </>
                )}
              </button>

              {ingredients.length < 2 && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Adicione pelo menos 2 ingredientes para gerar uma receita
                </p>
              )}
            </>
          ) : (
            /* Receita Gerada */
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Imagem */}
              <div className="relative h-64">
                <img
                  src={generatedRecipe.image}
                  alt={generatedRecipe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full">
                  <ChefHat className="w-6 h-6 text-purple-600" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{generatedRecipe.name}</h2>
                
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-xs text-gray-500">Tempo</p>
                      <p className="font-bold">{generatedRecipe.prepTime} min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-500">Calorias</p>
                      <p className="font-bold">{generatedRecipe.calories} kcal</p>
                    </div>
                  </div>
                </div>

                {/* Ingredientes */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Ingredientes</h3>
                  <ul className="space-y-2">
                    {generatedRecipe.ingredients.map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modo de Preparo */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Modo de Preparo</h3>
                  <ol className="space-y-3">
                    {generatedRecipe.steps.map((step: string, index: number) => (
                      <li key={index} className="flex gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Ações */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Bookmark className="w-5 h-5" />
                    Salvar Receita
                  </button>
                  <button
                    onClick={() => {
                      setGeneratedRecipe(null);
                      setIngredients([]);
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Gerar Nova
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
