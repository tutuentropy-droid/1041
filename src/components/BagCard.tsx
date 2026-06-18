import { Link } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';
import { Bag } from '@/types';

interface BagCardProps {
  bag: Bag;
  index?: number;
}

const BagCard = ({ bag, index = 0 }: BagCardProps) => {
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Link 
      to={`/bags/${bag.id}`}
      className="group relative block"
      style={{ animationDelay }}
    >
      <div className="fairy-card overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover group-hover:scale-[1.02]">
        <div className={`relative h-48 bg-gradient-to-br ${bag.bgGradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img 
              src={bag.imageUrl} 
              alt={bag.name}
              className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
              loading="lazy"
            />
          </div>
          
          {bag.featured && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-fairy-violet shadow-md">
              <Sparkles size={12} className="text-fairy-amber" />
              <span>精选</span>
            </div>
          )}
          
          <div className="absolute top-3 left-3">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-700 shadow-sm">
              {bag.style}
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/30 rounded-full blur-md" />
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display text-lg font-bold text-purple-800 group-hover:text-fairy-rose transition-colors">
              {bag.name}
            </h3>
          </div>
          
          <p className="text-sm text-purple-600/70 mb-3 line-clamp-2">
            {bag.personality.substring(0, 50)}...
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {bag.collectValue.includes('五星') ? (
                <>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-fairy-amber" fill="currentColor" />
                  ))}
                </>
              ) : bag.collectValue.includes('四星') ? (
                <>
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={14} className="text-fairy-amber" fill="currentColor" />
                  ))}
                  <Star size={14} className="text-gray-300" />
                </>
              ) : (
                <>
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} size={14} className="text-fairy-amber" fill="currentColor" />
                  ))}
                  {[...Array(2)].map((_, i) => (
                    <Star key={i} size={14} className="text-gray-300" />
                  ))}
                </>
              )}
            </div>
            <span className="text-xs text-fairy-violet/60 font-medium">
              查看详情 →
            </span>
          </div>
        </div>
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fairy-rose to-fairy-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </Link>
  );
};

export default BagCard;
