module.exports = {

  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'mask-image': "url('./images/mask_group_7.jpg')",
        'hygiene': "url('./images/hygiene_thumb_3cef315143ebf7d0d5db9f2f5dfc58eb.jpg')",
        'apparel_bottom_design': "url('./svg/apparel_bottom_design.svg')",

      }),

      colors: {
        'lime': '#C7BD2B',
        'green': '#4DB61F',
        'black': '#242932',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
