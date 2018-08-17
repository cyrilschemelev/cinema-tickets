module.exports = {
    env: {
        jest: true
    },
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict'
        }],
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        'no-multiple-empty-lines': ['error', { 'max': 1}],
        'no-trailing-spaces': ['error', {
            'skipBlankLines': true,
            'ignoreComments': true
        }],
        'no-var': 'error',
        'prefer-const': 'error'
    }
}