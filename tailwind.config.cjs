const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/app.html', './src/**/*.svelte'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif']
      }
    },

    colors: {
      ...colors,
      ti_blue_mat: {
        light: '#4C5B85',
        DEFAULT: '#1F3266',
        dark: '#17264D'
      },
      ti_blue_accent: {
        light: '#3381FF',
        DEFAULT: '#0062FF',
        dark: '#004ABF'
      },
      ti_cyan_mat: {
        light: '#4A798E',
        DEFAULT: '#1D5872',
        dark: '#164256'
      },
      ti_cyan_accent: {
        light: '#33D0E0',
        DEFAULT: '#00C4D8',
        dark: '#0093A2'
      },
      ti_green_mat: {
        light: '#719947',
        DEFAULT: '#4E7F19',
        dark: '#3B5F13'
      },
      ti_green_accent: {
        light: '#98E217',
        DEFAULT: '#73CC00',
        dark: '#569900'
      },
      ti_red_mat: {
        light: '#D1435E',
        DEFAULT: '#C61436',
        dark: '#950F29'
      },
      ti_red_accent: {
        light: '#FF3364',
        DEFAULT: '#FF003D',
        dark: '#BF002E'
      }
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      ti: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
      ti_hover: '0px 0px 15px 0px rgba(0, 0, 0, 0.5)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    },
    variants: {
      extend: {}
    }
  }
};
