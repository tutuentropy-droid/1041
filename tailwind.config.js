/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        fairy: {
          cream: '#FFF5F5',
          pink: '#FFE4E6',
          rose: '#FB7185',
          purple: '#E9D5FF',
          violet: '#A855F7',
          yellow: '#FEF3C7',
          amber: '#FBBF24',
          green: '#BBF7D0',
          mint: '#34D399',
          blue: '#BAE6FD',
          sky: '#38BDF8',
          coral: '#FDBA74',
        }
      },
      fontFamily: {
        display: ['"Fredoka"', '"Comic Sans MS"', 'cursive'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      boxShadow: {
        'fairy': '0 10px 40px -10px rgba(168, 85, 247, 0.3)',
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -10px rgba(168, 85, 247, 0.25)',
      },
      borderRadius: {
        'fairy': '2rem',
        'fairy-lg': '3rem',
      },
    },
  },
  plugins: [],
};
