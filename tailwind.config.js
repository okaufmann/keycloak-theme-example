/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e4f0ff',
          '100': '#cfe2ff',
          '200': '#a8c8ff',
          '300': '#74a2ff',
          '400': '#3e68ff',
          '500': '#00011a',
          '600': '#00011a', // button
          '700': '#0017e4', // button hover
          '800': '#000cb0',
          '900': '#000cb0',
          '950': '#00011a',
        },
        secondary: {
          '50': '#f7f9fb',
          '100': '#00011a', // body bg
          '200': '#d0dde7',
          '300': '#a7c0d2',
          '400': '#789eb8',
          '500': '#5782a0',
          '600': '#f7f9fb', // secondary text
          '700': '#38556c',
          '800': '#31485b',
          '900': '#2d3e4d',
          '950': '#1e2933',
        },
      },
    },
  },
};
