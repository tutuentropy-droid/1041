import { X, Link, Check, MessageCircle, Twitter, Copy } from 'lucide-react';
import { useState } from 'react';
import { useToast } from './Toast';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const ShareModal = ({ isOpen, onClose, title, url }: ShareModalProps) => {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  
  if (!isOpen) return null;
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      showToast('链接已复制到剪贴板！', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('复制失败，请手动复制', 'error');
    }
  };
  
  const shareToWeibo = () => {
    const shareUrl = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(shareUrl, '_blank');
    showToast('正在打开微博分享...', 'info');
  };
  
  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
    showToast('正在打开Twitter分享...', 'info');
  };
  
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `来看看包包世界档案馆的「${title}」吧！`,
          url: url,
        });
        showToast('分享成功！', 'success');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          showToast('分享取消', 'info');
        }
      }
    } else {
      copyToClipboard();
    }
  };
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-purple-900/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-fairy shadow-fairy p-6 w-full max-w-sm animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-bold text-purple-800">
            分享给朋友
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 hover:bg-purple-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="mb-6 p-3 bg-gradient-to-r from-fairy-pink/30 to-fairy-purple/30 rounded-2xl">
          <p className="text-sm font-medium text-purple-700 mb-1">分享内容</p>
          <p className="text-purple-800 font-display">{title}</p>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mb-6">
          {typeof navigator.share !== 'undefined' && (
            <button
              onClick={shareNative}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-fairy-pink/40 to-fairy-rose/40 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                <MessageCircle size={24} className="text-fairy-rose" />
              </div>
              <span className="text-xs font-medium text-purple-700">系统分享</span>
            </button>
          )}
          
          <button
            onClick={shareToWeibo}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-lg font-bold text-red-500">
              微
            </div>
            <span className="text-xs font-medium text-purple-700">微博</span>
          </button>
          
          <button
            onClick={shareToTwitter}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Twitter size={22} className="text-sky-500" />
            </div>
            <span className="text-xs font-medium text-purple-700">Twitter</span>
          </button>
          
          <button
            onClick={copyToClipboard}
            className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-violet-100 hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <Link size={22} className="text-fairy-violet" />
            </div>
            <span className="text-xs font-medium text-purple-700">复制链接</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-2xl">
          <div className="flex-1 text-xs text-purple-600 truncate pr-2">
            {url}
          </div>
          <button
            onClick={copyToClipboard}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-fairy-violet text-white hover:bg-purple-600'
            }`}
          >
            {copied ? (
              <>
                <Check size={14} />
                <span>已复制</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>复制</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
