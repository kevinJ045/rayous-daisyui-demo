/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rayous/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {
			maxWidth: {
				mobile: '480px'
			},
			spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        'tm': '20px 20px 0 0',
        'bm': '0 0 20px 20px'
      }
		},
  },
  daisyui: {
    themes: [
      "cupcake",
    	"bumblebee",
	    "emerald",
	    "corporate",
	    "synthwave",
	    "retro",
	    "cyberpunk",
	    "valentine",
	    "halloween",
	    "garden",
	    "forest",
	    "aqua",
	    "lofi",
	    "pastel",
	    "fantasy",
	    "wireframe",
	    "black",
	    "luxury",
	    "dracula",
	    "cmyk",
	    "autumn",
	    "business",
	    "acid",
	    "lemonade",
	    "night",
	    "coffee",
	    "winter"
	],
  },
  "plugins": [
  	require('daisyui')
  ]
}
