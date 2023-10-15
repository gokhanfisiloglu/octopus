/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blackampwhite-white": "#fff",
        silver: "#c4c4c4",
        black: "#000",
        "gray-gray-700": "#2D3748",
        "teal-teal-300": "#4fd1c5",
        "gray-gray-500": "#718096",
        "gray-gray-400": "#a0aec0",
        "gray-gray-300": "#CBD5E0",
        "gray-gray-200": "#e2e8f0",
        "green-green-400": "#48BB78",
        "red-red-500": "#E53E3E",
      },
      spacing: {},
      fontFamily: {
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        helvetica: "Helvetica",
      },
      borderRadius: {
        mini: "15px",
      },
      textColor: {
        'custom-black': '#2D3748', // Your custom text color
      },
      fontSize: {
        'text-lg': '18px',
        'text-xs': '12px',
        'text-xxs': '10px',
        '32': '32px'
      }
    },
    fontSize: {
      "2xs": "11px",
      "3xs": "10px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  plugins: [],
}

