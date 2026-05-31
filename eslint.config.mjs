import eslintPluginAstro from 'eslint-plugin-astro'
import markdown from '@eslint/markdown'
import unocss from '@unocss/eslint-config/flat'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/.agents/**', '**/.astro/**', 'pnpm-lock.yaml']
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  {
    files: ['**/*.ts', '**/*.mts'],
    languageOptions: {
      parser: tsParser
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/gfm',
    rules: {
      'markdown/no-html': 'warn'
    }
  },
  unocss
]
