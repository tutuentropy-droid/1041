import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Star, BookOpen } from 'lucide-react';
import { getFeaturedBags } from '@/data/bags';
import BagCard from '@/components/BagCard';
import { FairyBackground, FloatingStar, FloatingHeart } from '@/components/Decorators';

const Home = () => {
  const featuredBags = getFeaturedBags();
  
  return (
    <FairyBackground>
      <div className="pt-20 pb-16">
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center stagger-animation">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <Sparkles size={16} className="text-fairy-amber" />
                <span className="text-sm font-medium text-purple-700">欢迎来到童话世界</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-shadow-fairy">
                <span className="bg-gradient-to-r from-fairy-rose via-fairy-violet to-fairy-sky bg-clip-text text-transparent">
                  包包世界
                </span>
                <br />
                <span className="text-purple-800">档案馆</span>
              </h1>
              
              <p className="text-lg md:text-xl text-purple-700/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                在这里，每一个包包都是有生命的居民。
                <br className="hidden md:block" />
                它们有着独特的性格、奇妙的故事，等待你来发现！
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/bags" 
                  className="fairy-btn-primary flex items-center gap-2 text-lg group"
                >
                  <BookOpen size={20} />
                  <span>进入档案馆</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="fairy-btn-secondary flex items-center gap-2 text-lg">
                  <Heart size={20} />
                  <span>热门居民</span>
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-8 mt-12 text-purple-600/70">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-fairy-violet">10+</div>
                  <div className="text-sm">可爱居民</div>
                </div>
                <div className="w-px h-10 bg-purple-300/50" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-fairy-rose">6+</div>
                  <div className="text-sm">风格派系</div>
                </div>
                <div className="w-px h-10 bg-purple-300/50" />
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-fairy-amber">∞</div>
                  <div className="text-sm">奇妙故事</div>
                </div>
              </div>
            </div>
          </div>
          
          <FloatingStar className="top-32 left-[15%]" delay={0} size={20} />
          <FloatingStar className="top-48 right-[20%]" delay={1} size={16} />
          <FloatingHeart className="top-40 left-[25%]" delay={0.5} color="#FB7185" />
          <FloatingHeart className="top-56 right-[15%]" delay={1.5} color="#A855F7" />
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Star size={20} className="text-fairy-amber" fill="currentColor" />
                <span className="text-sm font-medium text-purple-600">本期精选</span>
                <Star size={20} className="text-fairy-amber" fill="currentColor" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-purple-800 mb-3">
                人气包包居民
              </h2>
              <p className="text-purple-600/70">
                来认识一下档案馆里最受欢迎的小伙伴们吧！
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              {featuredBags.map((bag, index) => (
                <BagCard key={bag.id} bag={bag} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/bags"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm text-fairy-violet font-medium shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 group"
              >
                <span>查看全部居民</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="fairy-card p-8 md:p-12 bg-gradient-to-br from-fairy-purple/50 via-fairy-pink/50 to-fairy-yellow/50 border-white/60">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-purple-800 mb-4">
                  关于包包世界
                </h2>
                <p className="text-purple-700/80 leading-relaxed mb-6">
                  包包世界是一个神奇的地方，这里的每一个包包都有自己的思想和性格。
                  它们有的来自糖果森林，有的来自星辰之海，还有的来自深海的珊瑚宫殿。
                  每一位居民都有属于自己的故事和秘密。
                </p>
                <p className="text-purple-700/80 leading-relaxed">
                  档案馆的使命就是记录下每一位包包居民的故事，
                  让更多人认识这些可爱的小伙伴。现在，就请推开档案馆的大门，
                  开启你的探索之旅吧！
                </p>
                
                <div className="flex items-center justify-center gap-4 mt-8">
                  <span className="text-3xl">✨</span>
                  <span className="text-3xl">👜</span>
                  <span className="text-3xl">🌸</span>
                  <span className="text-3xl">⭐</span>
                  <span className="text-3xl">💕</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer className="py-8 text-center text-purple-500/60 text-sm">
          <div className="container mx-auto px-4">
            <p>🎀 包包世界档案馆 · 用爱与想象力创造 🎀</p>
          </div>
        </footer>
      </div>
    </FairyBackground>
  );
};

export default Home;
