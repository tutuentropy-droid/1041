import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Star, Palette, Ruler, Sparkles, Home, Calendar, MapPin, Tag } from 'lucide-react';
import { getBagById } from '@/data/bags';
import InfoCard from '@/components/InfoCard';
import { FairyBackground, FloatingStar, FloatingFlower } from '@/components/Decorators';
import { useState } from 'react';
import { useFavoritesStore } from '@/store/favorites';
import { useToast } from '@/components/Toast';
import ShareModal from '@/components/ShareModal';

const BagDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bag = getBagById(id || '');
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const { showToast } = useToast();
  const [showShareModal, setShowShareModal] = useState(false);
  
  const isLiked = bag ? isFavorite(bag.id) : false;
  
  const handleToggleFavorite = () => {
    if (!bag) return;
    toggleFavorite(bag.id);
    if (!isLiked) {
      showToast(`已收藏「${bag.name}」！`, 'success');
    } else {
      showToast(`已取消收藏「${bag.name}」`, 'info');
    }
  };
  
  const handleShare = () => {
    setShowShareModal(true);
  };
  
  if (!bag) {
    return (
      <FairyBackground>
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😢</div>
            <h2 className="font-display text-2xl font-bold text-purple-700 mb-2">
              这位居民不见了
            </h2>
            <p className="text-purple-500 mb-6">可能去别的地方玩了...</p>
            <Link 
              to="/bags"
              className="fairy-btn-primary inline-flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              <span>回到档案馆</span>
            </Link>
          </div>
        </div>
      </FairyBackground>
    );
  }
  
  return (
    <FairyBackground>
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-purple-600 hover:bg-white/80 transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>返回</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative stagger-animation">
              <div className={`relative rounded-fairy-lg overflow-hidden bg-gradient-to-br ${bag.bgGradient} aspect-square shadow-fairy`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={bag.imageUrl} 
                    alt={bag.name}
                    className="w-full h-full object-contain drop-shadow-2xl animate-float-slow"
                  />
                </div>
                
                <FloatingStar className="top-8 left-8" delay={0} size={20} />
                <FloatingStar className="top-12 right-10" delay={0.5} size={16} />
                <FloatingFlower className="bottom-10 left-12" delay={1} color={bag.color} />
                <FloatingStar className="bottom-16 right-8" delay={1.5} size={14} />
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={handleToggleFavorite}
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 ${
                      isLiked 
                        ? 'bg-fairy-rose text-white animate-bounce-soft' 
                        : 'bg-white/90 text-purple-400 hover:text-fairy-rose'
                    }`}
                  >
                    <Heart size={22} fill={isLiked ? 'currentColor' : 'none'} />
                  </button>
                  <button 
                    onClick={handleShare}
                    className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-purple-400 hover:text-fairy-violet shadow-lg transition-all hover:scale-110"
                  >
                    <Share2 size={22} />
                  </button>
                </div>
                
                {bag.featured && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-fairy-violet shadow-md">
                    <Sparkles size={16} className="text-fairy-amber" />
                    <span>精选居民</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="stagger-animation">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 shadow-sm">
                  <Tag size={14} className="text-fairy-violet" />
                  <span className="text-sm font-medium text-purple-700">{bag.style}</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl font-bold text-purple-800 mb-2">
                  {bag.name}
                </h1>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {bag.collectValue.includes('五星') ? (
                      [...Array(5)].map((_, i) => (
                        <Star key={i} size={18} className="text-fairy-amber" fill="currentColor" />
                      ))
                    ) : bag.collectValue.includes('四星') ? (
                      <>
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} size={18} className="text-fairy-amber" fill="currentColor" />
                        ))}
                        <Star size={18} className="text-gray-300" />
                      </>
                    ) : (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <Star key={i} size={18} className="text-fairy-amber" fill="currentColor" />
                        ))}
                        {[...Array(2)].map((_, i) => (
                          <Star key={i} size={18} className="text-gray-300" />
                        ))}
                      </>
                    )}
                  </div>
                  <span className="text-sm text-purple-500">{bag.collectValue}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <InfoCard 
                  icon={Palette}
                  title="风格"
                  content={bag.style}
                  color={bag.color}
                  bgColor="from-pink-50 to-purple-50"
                />
                <InfoCard 
                  icon={Ruler}
                  title="容量"
                  content={bag.capacity}
                  color="#38BDF8"
                  bgColor="from-blue-50 to-cyan-50"
                />
                <InfoCard 
                  icon={Star}
                  title="收藏价值"
                  content={bag.collectValue}
                  color="#FBBF24"
                  bgColor="from-yellow-50 to-amber-50"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="fairy-card p-4 text-center bg-gradient-to-br from-fairy-pink/50 to-fairy-purple/50">
                  <Calendar size={20} className="mx-auto mb-2 text-fairy-rose" />
                  <div className="text-xs text-purple-500 mb-1">生日</div>
                  <div className="font-bold text-purple-700">{bag.birthday}</div>
                </div>
                <div className="fairy-card p-4 text-center bg-gradient-to-br from-fairy-green/50 to-fairy-blue/50">
                  <MapPin size={20} className="mx-auto mb-2 text-fairy-mint" />
                  <div className="text-xs text-purple-500 mb-1">居住地</div>
                  <div className="font-bold text-purple-700">{bag.residence}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-display text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                  <Sparkles size={20} className="text-fairy-amber" />
                  性格设定
                </h3>
                <div className="fairy-card p-5 bg-gradient-to-br from-fairy-yellow/30 to-fairy-pink/30">
                  <p className="text-purple-700/90 leading-relaxed">
                    {bag.personality}
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-display text-xl font-bold text-purple-800 mb-3">
                  兴趣爱好
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bag.hobbies.map((hobby, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/70 text-purple-600 text-sm font-medium shadow-sm border border-purple-100"
                    >
                      🌸 {hobby}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold text-purple-800 mb-3">
                  居民故事
                </h3>
                <div className="fairy-card p-6 bg-white/70">
                  <p className="text-purple-700/90 leading-relaxed">
                    {bag.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/bags"
              className="fairy-btn-primary inline-flex items-center gap-2"
            >
              <Home size={20} />
              <span>回到档案馆</span>
            </Link>
          </div>
        </div>
      </div>
      
      <ShareModal 
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title={`包包世界档案馆 - ${bag.name}`}
        url={typeof window !== 'undefined' ? window.location.href : ''}
      />
    </FairyBackground>
  );
};

export default BagDetail;
