module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
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
        'i18next',
    ],
    rules: {
        // Отступы в 4 пробела
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx']},
        ],
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
        // на нарушение этого правила выскакивать ошибка будет что не перевели текст
        // markupOnly - ругается на отсутствие только перевода внутри jsx
        'i18next/no-literal-string': ['warn', {markupOnly: true}],
        // сколько угодно длинные комменты делаем + длинна строки кода = 120 символов а если больше покажи ошибку
        'max-len': ['error', {ignoreComments: true, code: 100}],
    },
    globals: {
        __IS_DEV__: true,
    },
};

/*
Все свойства которые не нравятся будем отключать
 */
