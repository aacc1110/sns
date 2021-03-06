module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-console': 0,
		'no-alert': 0,
		'react/prop-types': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/label-has-associated-control': 0,
	},
};
