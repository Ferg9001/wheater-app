import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'white': '#F9F5F6',
      'orange': '#FFD6A5',
      'black': '#040D12',
      'yellow': '#FFFEC4',
      'blue': '#6096B4',
      'gray': '#ADC4CE',
      'darkgray': '#525E75',
      'darkblue': '#96B6C5',
      'red': '#FF9B9B',
      'skyblue': '#AEE2FF'
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
