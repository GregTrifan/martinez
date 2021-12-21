module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './apps/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
      './libs/**/*.{html,svelte,tsx,ts,jsx,js,pcss,scss,css}',
    ],
  },
  content: [],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};
