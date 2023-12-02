/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "hsla(197, 24%, 17%, 1)",
        "custom-gradient":
          " linear-gradient(181deg, #FCBF20 0.81%, #E55B12 127.81%);",
        "custom-white": "hsla(0, 0%, 100%, 1)",
        "custom-orange": "hsla(32, 90%, 51%, 1)",
      },
    },
  },
  plugins: [],
};
