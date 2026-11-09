import js from '@eslint/js';

export default [
  {
    ignores: [
      'index.html',
      'namma-metro.html',
      'odisha-landing.html',
      'download-textures.js',
      'node_modules/**'
    ]
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        THREE: 'readonly',
        window: 'readonly',
        document: 'readonly',
        globalThis: 'readonly'
      }
    },
    rules: {
      'no-console': 'warn'
    }
  },
  {
    files: ['test/**/*.cjs', 'verify_*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly'
      }
    }
  }
];
