/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': '320px',
        },
        colors: {
          primary: {
            DEFAULT: '#00DD88',
            dark: '#00BB77',
            light: '#22EEBB',
          },
          secondary: {
            DEFAULT: '#00BFFF',
            dark: '#0099DD',
            light: '#33CCFF',
          },
          accent: {
            DEFAULT: '#FFD700',
            dark: '#DDBB00',
            light: '#FFEE33',
          },
        },
        fontFamily: {
          heading: ['Poppins', 'Noto Sans TC', 'sans-serif'],
          body: ['Inter', 'Noto Sans TC', 'sans-serif'],
          mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        },
        boxShadow: {
          'glow-emerald': '0 0 40px rgba(0, 221, 136, 0.4)',
          'glow-blue': '0 0 40px rgba(0, 191, 255, 0.4)',
          'glow-gold': '0 0 40px rgba(255, 215, 0, 0.4)',
        },
        transitionDuration: {
          'fast': '150ms',
          'normal': '300ms',
          'slow': '600ms',
        },
      },
    },
    plugins: [],
  }