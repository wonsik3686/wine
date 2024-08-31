import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        '3xl': ['2rem', '2.625rem'],
        '2xl': ['1.5rem', '2rem'],
        xl: ['1.25rem', '2rem'],
        '2lg': ['1.125rem', '1.625rem'],
        lg: ['1rem', '1.625rem'],
        md: ['0.875rem', '1.5rem'],
        sm: ['0.813rem', '1.375rem'],
        xs: ['0.75rem', '1.25rem'],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
      },
      colors: {
        black: '#101318',
        white: '#FFF',
        gray: {
          100: '#F2F4F8',
          300: '#CFDBEA',
          500: '#9FACBD',
          800: '#2D3034',
        },
        purple: {
          100: '#6A42DB',
          10: '#F1EDFC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
