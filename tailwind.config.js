export default {
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#A3D9FF',
					200: '#99D5FF',
					300: '#85CCFF',
					400: '#70C3FF',
					500: '#5CBBFF',
					600: '#47B3FF',
					700: '#33AAFF',
					800: '#1FA2FF',
					900: '#0A99FF',
				},
				secondary: {
					100: '#D6D0DC',
					200: '#CCC5D3',
					300: '#C2B9CA',
					400: '#B8AEC2',
					500: '#AEA2B9',
					600: '#A496B0',
					700: '#9A8BA7',
					800: '#907F9F',
					900: '#7E6B8F',
				},
				positive: {
					100: '#69DDAD',
					200: '#59D9A4',
					300: '#48D59B',
					400: '#37D291',
					500: '#2DC887',
					600: '#2AB77C',
					700: '#26A671',
					800: '#229665',
					900: '#1C7C54',
				},
				negative: {
					100: '#F093A0',
					200: '#EE8190',
					300: '#EB6F80',
					400: '#E95D70',
					500: '#E74B60',
					600: '#E43A50',
					700: '#E22840',
					800: '#D71D36',
					900: '#BF1A2F',
				},
				warning: {
					100: '#FEE672',
					200: '#FDE35D',
					300: '#FDDF49',
					400: '#FDDC35',
					500: '#FDD821',
					600: '#FDD50D',
					700: '#F2CA02',
					800: '#DEBA02',
					900: '#CAA902',
				},
				info: {
					100: '#73E5FC',
					200: '#5FE2FC',
					300: '#4BDEFB',
					400: '#37DAFB',
					500: '#23D7FB',
					600: '#0FD3FA',
					700: '#05C9F0',
					800: '#04B8DC',
					900: '#04A7C8',
				}
			},

		}
	},
	content:
		[
		"{srcDir}/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
		"{srcDir}/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
		"{srcDir}/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
		"{srcDir}/plugins/**/*.{js,ts,mjs}",
		"{srcDir}/composables/**/*.{js,ts,mjs}",
		"{srcDir}/utils/**/*.{js,ts,mjs}",
		"{srcDir}/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
		"{srcDir}/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
		"{srcDir}/app.config.{js,ts,mjs}"
	],
	plugins: []
}
