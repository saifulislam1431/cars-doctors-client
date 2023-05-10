/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#db2733",
        
"secondary": "#757ef9",
        
"accent": "#db46bf",
        
"neutral": "#1F1D34",
        
"base-100": "#F0F0F5",
        
"info": "#388ADC",
        
"success": "#1A6B5B",
        
"warning": "#FBDE60",
        
"error": "#E24658",
        },
      },
    ],
  },
   plugins: [require("daisyui")],
}

