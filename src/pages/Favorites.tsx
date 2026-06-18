import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Trash2, Sparkles } from 'lucide-react';
import { getBagById } from '@/data/bags';
import { useFavoritesStore } from '@/store/favorites';
import BagCard from '@/components/BagCard';
import { FairyBackground } from '@/components/Decorators';
import { useToast } from '@/components/Toast';

const Favorites = () => {
  const { favorites, clearFavorites } = useFavoritesStore();
  const { showToast } = useToast();
  
  const favoriteBags = favorites
    .map((id) => getBagById(id))
    .filter((bag) => bag !== undefined);
  
  const handleClearAll = () => {
    if (confirm('确定要清空所有收藏吗？')) {
      clearFavorites();
      showToast('已清空所有收藏', 'info');
    }
  };
  
  return (
    <FairyBackground>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/bags"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>返回档案馆</span>
            </Link>
            
            {favoriteBags.length > 0 && (
              <button
                onClick={handleClearAll}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-all text-sm font-medium"
              >
                <Trash2 size={16} />
                <span>清空收藏</span>
              </button>
            )}
          </div>
          
          <div className="text-center mb-10 stagger-animation">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
              <Heart size={16} className="text-fairy-rose" fill="currentColor" />
              <span className="text-sm font-medium text-purple-700">我的收藏夹</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-purple-800 mb-3">
              收藏的包包居民
            </h1>
            <p className="text-purple-600/70 max-w-xl mx-auto">
              {favoriteBags.length > 0 
                ? `你一共收藏了 ${favoriteBags.length} 位可爱的包包居民～` 
                : '还没有收藏任何包包居民哦，快去档案馆看看吧！'
              }
            </p>
          </div>
          
          {favoriteBags.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-animation">
              {favoriteBags.map((bag, index) => (
                <BagCard key={bag!.id} bag={bag!} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-fairy-pink/50 to-fairy-purple/50 flex items-center justify-center">
                  <Heart size={48} className="text-white/80" />
                </div>
                <Sparkles size={24} className="absolute -top-2 -right-2 text-fairy-amber animate-sparkle" />
                <Sparkles size={18} className="absolute -bottom-1 -left-2 text-fairy-violet animate-sparkle" style={{ animationDelay: '0.5s' }} />
              </div>
              <h3 className="font-display text-2xl font-bold text-purple-700 mb-2">
                收藏夹空空的
              </h3>
              <p className="text-purple-500 mb-6">
                快去档案馆逛逛，发现你喜欢的包包居民吧！
              </p>
              <Link
                to="/bags"
                className="fairy-btn-primary inline-flex items-center gap-2"
              >
                <span>去档案馆看看</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </FairyBackground>
  );
};

export default Favorites;
