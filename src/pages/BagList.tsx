import { useState } from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';
import { bags } from '@/data/bags';
import BagCard from '@/components/BagCard';
import { FairyBackground } from '@/components/Decorators';

const BagList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  
  const styles = [...new Set(bags.map(bag => bag.style))];
  
  const filteredBags = bags.filter(bag => {
    const matchesSearch = bag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bag.style.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bag.personality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStyle = !selectedStyle || bag.style === selectedStyle;
    return matchesSearch && matchesStyle;
  });
  
  return (
    <FairyBackground>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 stagger-animation">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
              <Sparkles size={16} className="text-fairy-amber" />
              <span className="text-sm font-medium text-purple-700">档案馆藏</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-purple-800 mb-3">
              全部包包居民
            </h1>
            <p className="text-purple-600/70 max-w-xl mx-auto">
              这里记录了包包世界所有居民的档案，
              点击卡片可以查看详细信息哦～
            </p>
          </div>
          
          <div className="fairy-card p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400" />
                <input
                  type="text"
                  placeholder="搜索包包名称或风格..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white/80 border-2 border-purple-100 focus:border-fairy-violet focus:outline-none transition-colors text-purple-800 placeholder-purple-300"
                />
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter size={18} className="text-purple-400 flex-shrink-0" />
                <button
                  onClick={() => setSelectedStyle(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    !selectedStyle
                      ? 'bg-gradient-to-r from-fairy-rose to-fairy-violet text-white shadow-md'
                      : 'bg-white/60 text-purple-600 hover:bg-white/80'
                  }`}
                >
                  全部
                </button>
                {styles.map(style => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedStyle === style
                        ? 'bg-gradient-to-r from-fairy-rose to-fairy-violet text-white shadow-md'
                        : 'bg-white/60 text-purple-600 hover:bg-white/80'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-purple-500">
              共找到 <span className="font-bold text-fairy-violet">{filteredBags.length}</span> 位居民
            </div>
          </div>
          
          {filteredBags.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-animation">
              {filteredBags.map((bag, index) => (
                <BagCard key={bag.id} bag={bag} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-display text-2xl font-bold text-purple-700 mb-2">
                没有找到对应的居民
              </h3>
              <p className="text-purple-500">
                试试看其他关键词吧～
              </p>
            </div>
          )}
        </div>
      </div>
    </FairyBackground>
  );
};

export default BagList;
