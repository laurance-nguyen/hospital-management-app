module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': [0],
    'no-unused-vars': 1,
    'prefer-destructuring': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/prefer-stateless-function': [0],
    'react/destructuring-assignment': [0],
    'react/prop-types': [0],
    'no-underscore-dangle': [0],
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'import/prefer-default-export': [0],
    'no-use-before-define': [
      0,
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        printWidth: 100
      }
    ]
  },
  globals: {
    fetch: false
  },
  plugins: ['prettier']
};
