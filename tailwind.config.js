module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      hand: 'NanumPenScript',
      sans: 'Roboto-Regular',
      'sans-m': 'Roboto-Medium',
      'sans-b': 'Roboto-Bold',
      'sans-bb': 'Roboto-Black',
    },
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
