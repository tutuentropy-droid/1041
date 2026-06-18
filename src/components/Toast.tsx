import { create } from 'zustand';
import { Check, X, AlertCircle, Info } from 'lucide-react';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration: number;
}

interface ToastStore {
  toasts: Toast[];
  showToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  
  showToast: (message, type = 'success', duration = 3000) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { id, type, message, duration }]
    }));
    
    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id)
        }));
      }, duration);
    }
  },
  
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }));
  },
}));

const ToastIcon = ({ type }: { type: ToastType }) => {
  switch (type) {
    case 'success':
      return <Check size={20} className="text-green-500" />;
    case 'error':
      return <AlertCircle size={20} className="text-red-500" />;
    case 'info':
      return <Info size={20} className="text-blue-500" />;
  }
};

const ToastItem = ({ toast }: { toast: Toast }) => {
  const removeToast = useToastStore((state) => state.removeToast);
  
  return (
    <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-white/50 animate-fade-in-up min-w-[280px] max-w-md">
      <ToastIcon type={toast.type} />
      <span className="flex-1 text-sm font-medium text-purple-800">{toast.message}</span>
      <button
        onClick={() => removeToast(toast.id)}
        className="text-purple-400 hover:text-purple-600 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};

const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  
  return (
    <div className="fixed top-20 right-4 z-[100] flex flex-col gap-3">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export const useToast = () => {
  const showToast = useToastStore((state) => state.showToast);
  return { showToast };
};

export default ToastContainer;
