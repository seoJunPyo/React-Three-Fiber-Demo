module.exports = {
	root: true,
	env: { browser: true, es2022: true, node: true },
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'html'],
	root: true,
	extends: [
		'airbnb-base',
		'prettier',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	settings: {
		react: { version: 'detect' },
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		// Note: you must disable the base rule as it can report incorrect errors
		'no-use-before-define': 'off',
		'no-shadow': 'off',
		'no-nested-ternary': 'off',
		'import/no-cycle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'react/react-in-jsx-scope': 'off', // "React" must be in scope when using JSX
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'default-param-last': 'off',
		'no-param-reassign': 'off',
		// "react-hooks/exhaustive-deps": ["warn", { additionalHooks: "useRecoilCallback" }], // for recoil
	},
};
