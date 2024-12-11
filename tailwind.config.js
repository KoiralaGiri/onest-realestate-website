/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Font families
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      // Colors
      colors: {
        brand: {
          primary: '#b68319',
          light: '#d4a94d',
          dark: '#8c6314',
        },
      },
      // Grid layouts
      gridTemplateRows: {
        'bento-grid': 'repeat(4, minmax(180px, 1fr))',
      },
      gridTemplateColumns: {
        'bento-grid': 'repeat(4, minmax(0, 1fr))',
      },
      // Animations
      animation: {
        float: 'float 6s ease-in-out infinite',
        wave: 'wave 20s linear infinite',
        'scroll-background': 'scroll-background 30s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      // Keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-background': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      // Background patterns
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
