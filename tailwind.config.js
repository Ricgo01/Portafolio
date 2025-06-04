/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada
        primary: {
          beige: '#EFE4D2',
          blue: '#254D70',
          navy: '#131D4F',
          brown: '#954C2E',
        },
        // Variaciones de tema
        light: {
          bg: '#EFE4D2',
          surface: '#FFFFFF',
          text: '#131D4F',
          secondary: '#254D70',
          accent: '#954C2E',
        },
        dark: {
          bg: '#131D4F',
          surface: '#254D70',
          text: '#EFE4D2',
          secondary: '#EFE4D2',
          accent: '#954C2E',
        }
      },
      animation: {
        // Animaciones personalizadas para los logos de tecnología
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'gentle-pulse': 'gentle-pulse 4s ease-in-out infinite',
        'hover-grow': 'hover-grow 0.3s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        // Animación de flotación suave
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)',
          }
        },
        // Rebote más suave
        'gentle-bounce': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-8px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        // Pulso más sutil
        'gentle-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.9',
            transform: 'scale(1.02)',
          }
        },
        // Animación de crecimiento para hover
        'hover-grow': {
          '0%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.1)',
          }
        },
        // Movimiento de wiggle
        wiggle: {
          '0%, 100%': { 
            transform: 'rotate(-3deg)' 
          },
          '50%': { 
            transform: 'rotate(3deg)' 
          }
        }
      }
    },
  },
  plugins: [],
}
