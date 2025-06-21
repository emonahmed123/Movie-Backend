import eslint from '@eslint/js';
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintConfigPrettier,

    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "warn",
            "no-console": "warn",
            "semi": "warn",
            "prefer-const": "error",
        },
    }, {
    ignores: ['.env', 'node_modules', './dist',]
}



);