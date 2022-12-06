// @ts-check - enable TS check for js file
import { dirname, join, resolve } from 'path'
import { defineConfig } from 'windicss/helpers'

const basePath = dirname(resolve(__dirname))
export default defineConfig({
  mode: 'jit',
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Helvetica',
        'Segoe UI',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
      ],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        blue: '#3A4358',
        pink: '#FED1FF',
        fuchsia: '#F72585',
        red: '#A54770',
        violet: '#5d5074',
        green: '#9bf2cf',
        yellow: '#EEE780',
        primary: '#EEE780',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {},

  extract: {
    exclude: [join(basePath, '**/node_modules/**/*')],
    include: [join(basePath, '**/src/**/*.{html,js,jsx,ts,tsx,css}')],
  },
})
