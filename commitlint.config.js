export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'homepage',
        'navigation',
        'forms',
        'components',
        'styling',
        'testing',
        'deps',
        'config',
        'docs',
      ],
    ],
  },
};
