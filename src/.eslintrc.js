module.exports = {
    //extends : "standard"
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
    rules: {
        'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
        'error',
        {
            singleQuote: true
            //trailingComma: 'all',
        },
        ],
        eqeqeq: ['error', 'always'], // adding some custom ESLint rules
    },
};