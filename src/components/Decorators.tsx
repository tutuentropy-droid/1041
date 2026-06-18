import { Sparkles, Star, Cloud, Flower2, Heart } from 'lucide-react';

interface FloatingStarProps {
  className?: string;
  delay?: number;
  size?: number;
}

export const FloatingStar = ({ className = '', delay = 0, size = 16 }: FloatingStarProps) => (
  <div 
    className={`absolute text-fairy-amber animate-twinkle ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Star size={size} fill="currentColor" />
  </div>
);

interface FloatingCloudProps {
  className?: string;
  delay?: number;
}

export const FloatingCloud = ({ className = '', delay = 0 }: FloatingCloudProps) => (
  <div 
    className={`absolute text-white/70 animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Cloud size={48} fill="currentColor" strokeWidth={1} />
  </div>
);

interface FloatingFlowerProps {
  className?: string;
  delay?: number;
  color?: string;
}

export const FloatingFlower = ({ className = '', delay = 0, color = '#FB7185' }: FloatingFlowerProps) => (
  <div 
    className={`absolute animate-float-slow ${className}`}
    style={{ animationDelay: `${delay}s`, color }}
  >
    <Flower2 size={24} fill="currentColor" />
  </div>
);

interface SparkleProps {
  className?: string;
  delay?: number;
}

export const Sparkle = ({ className = '', delay = 0 }: SparkleProps) => (
  <div 
    className={`absolute text-fairy-violet animate-sparkle ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Sparkles size={20} />
  </div>
);

interface FloatingHeartProps {
  className?: string;
  delay?: number;
  color?: string;
}

export const FloatingHeart = ({ className = '', delay = 0, color = '#FB7185' }: FloatingHeartProps) => (
  <div 
    className={`absolute animate-bounce-soft ${className}`}
    style={{ animationDelay: `${delay}s`, color }}
  >
    <Heart size={18} fill="currentColor" />
  </div>
);

interface FairyBackgroundProps {
  children: React.ReactNode;
}

export const FairyBackground = ({ children }: FairyBackgroundProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingStar className="top-20 left-[10%]" delay={0} size={12} />
      <FloatingStar className="top-32 right-[15%]" delay={0.5} size={16} />
      <FloatingStar className="top-48 left-[25%]" delay={1} size={10} />
      <FloatingStar className="top-64 right-[25%]" delay={1.5} size={14} />
      <FloatingStar className="bottom-40 left-[8%]" delay={0.8} size={12} />
      <FloatingStar className="bottom-60 right-[10%]" delay={2} size={16} />
      
      <FloatingCloud className="top-24 left-[5%]" delay={0} />
      <FloatingCloud className="top-40 right-[8%]" delay={2} />
      <FloatingCloud className="bottom-32 left-[15%]" delay={4} />
      
      <FloatingFlower className="top-72 left-[5%]" delay={0.5} color="#FB7185" />
      <FloatingFlower className="bottom-48 right-[12%]" delay={1.5} color="#A855F7" />
      
      <Sparkle className="top-36 left-[40%]" delay={0.3} />
      <Sparkle className="top-56 right-[35%]" delay={1.2} />
      <Sparkle className="bottom-28 left-[30%]" delay={2.5} />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
