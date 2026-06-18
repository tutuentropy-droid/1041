import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  color?: string;
  bgColor?: string;
}

const InfoCard = ({ icon: Icon, title, content, color = '#A855F7', bgColor = 'from-purple-100 to-pink-100' }: InfoCardProps) => {
  return (
    <div className={`fairy-card p-5 bg-gradient-to-br ${bgColor} border-white/60`}>
      <div className="flex items-start gap-4">
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <div className="flex-1">
          <h4 className="font-display font-bold text-purple-800 mb-1">
            {title}
          </h4>
          <p className="text-sm text-purple-700/80 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
