import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      // Adicione Prettier como regra
      'prettier/prettier': 'error'

      // Outras regras que você usa no ESLint
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },
  // Configurações adicionais do Prettier
  prettierConfig
];
