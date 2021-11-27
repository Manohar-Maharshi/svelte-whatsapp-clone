const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
  	require('@tailwindcss/line-clamp'),
  	require('tailwind-scrollbar'),
  ],
};

module.exports = config;
