import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      
        keyframes: {
          slideInFromLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
        animation: {
          slideInFromLeft: 'slideInFromLeft 0.8s ease-out forwards',
        },
        server:{
          port:5000,
          open:true,
        },
        animation: {
          wave: "wave 20s linear infinite",
          "wave-slow": "wave 12s linear infinite",
          "wave-fast": "wave 10s linear infinite",
        },
        keyframes: {
          wave: {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        },
    },
  },

  plugins: [react(),
    tailwindcss(),

  ],

})
