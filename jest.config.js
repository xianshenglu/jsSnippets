module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/index.{js,jsx}'],
  transformIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json-summary']
}
