const OFF = 0
const ERROR = 2

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'import/no-extraneous-dependencies': OFF,
		'react/no-direct-mutation-state': ERROR,
		'react/require-default-props': OFF,
		'react-hooks/rules-of-hooks': ERROR,
		'no-param-reassign': 'off',
	},
}
