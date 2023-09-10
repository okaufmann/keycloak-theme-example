const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e4f0ff',
          '100': '#cfe2ff',
          '200': '#a8c8ff',
          '300': '#74a2ff',
          '400': '#3e68ff',
          '500': '#1331ff',
          '600': '#00011a', // button
          '700': '#001aff',
          '800': '#0017e4',
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

        provider: {
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
