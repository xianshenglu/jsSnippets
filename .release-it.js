/* eslint-disable no-template-curly-in-string */
module.exports = {
  git: {
    tagName: 'v${version}',
    commitMessage: 'chore: release v${version}',
  },
  hooks: {
    'before:init': ['npm run lint', 'npm run test'],
    'after:bump': ['npm run build', 'npm run docs', 'git add .'],
    'after:git:release': 'echo After git push, before github release',
    'after:release':
      'echo Successfully released ${name} v${version} to ${repo.repository}.',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
    },
  },
}
