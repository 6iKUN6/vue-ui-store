// 引入vue模版的eslint
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
// ts-eslint解析器，使 eslint 可以解析 ts 语法
import tseslint from 'typescript-eslint';
// vue文件解析器
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config({
  // tseslint.config添加了extends扁平函数，直接用。否则是eslint9.0版本是没有extends的
  ignores: ['**/node_modules/**', '**/dist/**'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'] // vue3推荐的eslint配置
  ],
  plugins: {
    prettier,
    import: importPlugin
  },
  languageOptions: {
    parser: vueParser, // 使用vue解析器，这个可以识别vue文件
    parserOptions: {
      parser: tseslint.parser, // 在vue文件上使用ts解析器
      sourceType: 'module'
    }
  },
  rules: {
    ...prettier.configs.recommended.rules,
    'vue/prop-name-casing': ['error', 'camelCase'],
    '@typescript-eslint/no-explicit-any': 'off', //放any类型
    // 'semi': ['warn', 'never'],
    'comma-dangle': ['error', 'never'],
    // 'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'space-before-function-paren': 0,
    'generator-star-spacing': 'off',
    'object-curly-spacing': 0, // 强制在大括号中使用一致的空格
    'array-bracket-spacing': 0, // 方括号
    'no-debugger': 'off',
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: false }
    ],

    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      },
      {
        blankLine: 'always',
        prev: 'function',
        next: '*'
      }
    ],

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ]
  }
});
