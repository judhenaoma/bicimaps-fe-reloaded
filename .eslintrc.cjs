module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		'react/react-in-jsx-scope': ['off'],
		'react/jsx-uses-react': ['off'],
		'react/jsx-props-no-spreading': ['warn'],
		'react/no-unescaped-entities': ['off'],
		'no-restricted-imports': [
            'error',
            {
                patterns: ['@/features/*/*'],
            },
        ]
	}
}
