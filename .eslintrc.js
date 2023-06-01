module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // project: './tsconfig.json',
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // отступ табов для jsx
    'react/jsx-indent-props': [2, 4],
    // отступ табов для js
    'react/jsx-indent': ['error', 6],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // не используемая переменная
    'no-unused-vars': 'warn',
    // отключим использование дефолтного экспорта
    'react/require-default-props': 'off',
    // если используем реакт то обязательно импортировать его
    'react/react-in-jsx-scope': 'off',
    // использовать spread оператор для пропсов нельзя! Плохая практика!
    'react/jsx-props-no-spreading': 'warn',
    // отключим что надо использовать function а не "стрелки"
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // при импорте не указываем расширение тк вебпаком настроили это...
    'import/extensions': 'off',
    // запрет нижних подчеркиваний
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};

/*
Все свойства которые не нравятся будем отключать
 */
