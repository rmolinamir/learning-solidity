const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        'light': {
          'primary' : '#2f80ed',           /* Primary color */
          'primary-focus' : '#1876F4',     /* Primary color - focused */
          'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

          'secondary' : '#f6d860',         /* Secondary color */
          'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
          'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

          'accent' : '#37cdbe',            /* Accent color */
          'accent-focus' : '#2aa79b',      /* Accent color - focused */
          'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

          'neutral' : '#3d4451',           /* Neutral color */
          'neutral-focus' : '#1d2026',     /* Neutral color - focused */
          'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
          'base-200' : '#f9fafb',          /* Base color, a little darker */
          'base-300' : '#d1d5db',          /* Base color, even more darker */
          'base-content' : '#1f2937',      /* Foreground content color to use on base color */

          'info' : '#2094f3',              /* Info */
          'success' : '#009485',           /* Success */
          'warning' : '#ff9900',           /* Warning */
          'error' : '#ff5724',             /* Error */
        },
      },
      {
        'dark': {
          'primary' : '#2f80ed',           /* Primary color */
          'primary-focus' : '#1876F4',     /* Primary color - focused */
          'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

          'secondary' : '#f6d860',         /* Secondary color */
          'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
          'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

          'accent' : '#37cdbe',            /* Accent color */
          'accent-focus' : '#2aa79b',      /* Accent color - focused */
          'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

          'neutral' : '#5b6670',           /* Neutral color */
          'neutral-focus' : '#1d2026',     /* Neutral color - focused */
          'neutral-content' : '#16181d',   /* Foreground content color to use on neutral color */

          'base-100' : '#3d4451',          /* Base color of page, used for blank backgrounds */
          'base-200' : '#202225',          /* Base color, a little darker */
          'base-300' : '#16181d',          /* Base color, even more darker */
          'base-content' : '#ebecf0',      /* Foreground content color to use on base color */

          'info' : '#66c7ff',              /* Info */
          'success' : '#87d039',           /* Success */
          'warning' : '#e2d562',           /* Warning */
          'error' : '#ff6f6f',             /* Error */
        },
      }
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
};
