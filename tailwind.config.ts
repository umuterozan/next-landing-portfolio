import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'global-text': '#AAB5C2',
        'global-section-bg': '#1C2533',
        'primary-600': '#2781E9',
        'primary-50': '#182E53',
        'primary-500': '#349AF4',
        'primary-100': '#DBEFFE',
        'primary-200': '#C0E4FD',
        'global-bg': '#151D2B',
        'primary-400': '#61BCF9',
      },
    },
  },
  plugins: [],
}
export default config
