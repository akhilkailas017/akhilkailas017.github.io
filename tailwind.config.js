/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1E293B',
        accent: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards'
      }
    }
  },
  plugins: []
}
