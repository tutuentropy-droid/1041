import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/30">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-fairy-rose to-fairy-violet rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white text-lg">👜</span>
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-fairy-rose to-fairy-violet bg-clip-text text-transparent">
              包包世界档案馆
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link 
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isHome 
                  ? 'bg-white/80 text-fairy-violet shadow-md' 
                  : 'text-fairy-violet/70 hover:bg-white/50'
              }`}
            >
              <Home size={18} />
              <span className="hidden sm:inline font-medium">首页</span>
            </Link>
            
            <Link 
              to="/bags"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                location.pathname.startsWith('/bags')
                  ? 'bg-white/80 text-fairy-violet shadow-md' 
                  : 'text-fairy-violet/70 hover:bg-white/50'
              }`}
            >
              <BookOpen size={18} />
              <span className="hidden sm:inline font-medium">档案馆</span>
            </Link>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-full text-fairy-rose/70 hover:bg-white/50 transition-all duration-300">
              <Heart size={18} />
              <span className="hidden sm:inline font-medium">收藏</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
