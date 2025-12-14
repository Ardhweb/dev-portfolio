import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
     extend: {
    // colors: {
    //   primary: 'hsl(0 0% 100%)',
    //   secondary: 'hsl(220 10% 68%)',
    //   muted: 'hsl(220 10% 55%)',

    //   bg: {
    //     primary: 'hsl(220 15% 8%)',
    //     secondary: 'hsl(220 15% 12%)',
    //   },

    //   accent: 'hsl(45 95% 55%)',
    //   success: 'hsl(145 65% 45%)',
    //   danger: 'hsl(0 70% 50%)',
    // },
	fontFamily: {
      primary: ['Belanosima', 'system-ui', 'sans-serif'],
      secondary: ['Poppins', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
  },

  plugins: [typography, forms, containerQueries, aspectRatio,	addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
